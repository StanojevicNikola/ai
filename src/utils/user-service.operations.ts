import { userServiceConfig } from '../config';

const getBasicAuth = () => {
  const username = userServiceConfig.username;
  const password = userServiceConfig.password;
  return Buffer.from(`${username}:${password}`).toString('base64');
};

export const userServiceOperations = (USER_SERVICE_BASEURL: string) => {
  return [
    {
      template: {
        method: 'DELETE',
        url: `${USER_SERVICE_BASEURL}/users/{email}`,
        options: {
          headers: {
            Authorization: `Basic ${getBasicAuth()}`,
          },
        },
      },
      functions: {
        deleteUser: ['email'],
      },
    },
    {
      template: {
        method: 'POST',
        url: `${USER_SERVICE_BASEURL}/registerFbl`,
        options: {
          headers: {
            Authorization: `Basic ${getBasicAuth()}`,
          },
        },
        body: '{body}',
      },
      functions: {
        registerFbl: ['body'],
      },
    },
  ];
};
