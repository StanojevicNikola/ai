#!/bin/bash

cp -r /home/node/temp_cashe/node_modules/. /home/node/app/node_modules/
exec npm run start:dev
