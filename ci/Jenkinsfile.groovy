#!groovy

project_name="fbl-user-service"

import java.util.regex.*

library 'global-libs@master'

try {
    def gitCommit
    node {
        /* Only keep the 10 most recent builds. */
        properties([
              [
                $class: 'jenkins.model.BuildDiscarderProperty',
                strategy: [
                  $class: 'LogRotator',
                  numToKeepStr: '10'
                  ]
              ],
              disableConcurrentBuilds()
        ])

        stage('Init') {
            deleteDir()
            sh 'ls -lah'

            checkout(
                [
                    $class: 'GitSCM',
                    branches: [[name: '*/$BRANCH_NAME']],
                    userRemoteConfigs: [[credentialsId: 'github-fblops-userpass', url: "https://github.com/Footballerista-LLC/${project_name}.git"]],
                    extensions: [
                            [$class: 'CloneOption', depth: 2, noTags: true, shallow: true]
                    ]
                ]
            )
            gitCommit = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
        }

        withEnv([
            "PROJECT_NAME=${project_name}",
            "APP_VERSION=${gitCommit}-${BRANCH_NAME}",
            "GIT_COMMIT=${gitCommit}",
            "DO_TEST=yes",
            "RUN_MIGRATIONS=yes"
        ]) {
            withEnv(config.getDeployConfig()) {
                withCredentials([
                    string(credentialsId: 'github-fblops-npmauth-token', variable: 'NPM_AUTH_TOKEN')
                ]) {
                    buildBE {}
                }
            }
        }
    }
}

catch (exc) {
    echo "Caught: ${exc}"

    currentBuild.result = 'FAILURE'

    node {
        withEnv([
            "BUILD_RESULT=${currentBuild.result}"
        ]) {
            println("sendNotification")
        }
    }
}
