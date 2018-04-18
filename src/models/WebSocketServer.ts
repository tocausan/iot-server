'use strict';

import 'colors';
import * as webSocket from 'ws';
import * as url from 'url';
import Config from "../config";
import {Benchmark} from "./Benchmark";
import WebSocket = require("ws");
import {WebSocketMessage} from "./WebSocketMessage";

const benchmark: Benchmark = new Benchmark('WebSocketServer');

export class WebSocketServer {
    public port: number;
    public address: string;

    constructor() {
        this.port = Config.socket.port;
        this.address = 'ws://' + Config.host.ip + ':' + this.port;
        benchmark.pushLine('address', this.address, true);
        benchmark.display();
    }

    create(exec: any) {
        const server = new webSocket.Server({
            port: this.port
        });

        server.on('connection', (socket: WebSocket) => {
            socket.send(new WebSocketMessage({message: 'hello'}).stringify());

            socket.on('message', (data: any) => {
                const webSocketMessage = new WebSocketMessage(data).display();
                exec(webSocketMessage.message, socket);
            });
        });
        return server;
    }
}