'use strict';

import * as path from "path";
import {Benchmark} from "./models";

console.log(process.env.PROD);

const Config = {
    title: process.env.TITLE || 'iot-server',
    environment: process.env.PROD === 'true' ? 'prod' : 'dev',
    host: {
        ip: process.env.HOST_IP || '127.0.0.1',
    },
    http: {
        port: process.env.PROD === 'true' ? 80 : 3000
    },
    socket: {
        port: process.env.PROD === 'true' ? 443 : 3100
    },
    path: {
        public: path.join(__dirname, '/public')
    }
};

const benchmark = new Benchmark(Config.title);
benchmark.pushLine('environment', Config.environment, true);
benchmark.pushLine('host-ip', Config.host.ip, true);
benchmark.pushLine('http-port', Config.http.port.toString(), true);
benchmark.pushLine('socket-port', Config.socket.port.toString(), true);
benchmark.display();

export default Config;