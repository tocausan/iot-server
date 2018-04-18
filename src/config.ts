'use strict';

import * as path from "path";

export const Config = {
    title: process.env.TITLE || 'iot-server',
    environment: process.env.PROD || 'dev',
    host:{
        ip: process.env.HOST_IP || '127.0.0.1',
    },
    http: {
        port: parseInt(process.env.HTTP_PORT) || 3000
    },
    socket: {
        port: parseInt(process.env.SOCKET_PORT) || 3100
    },
    path: {
        public: path.join(__dirname, '/public')
    }
};