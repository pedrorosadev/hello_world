"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var listabsm_1 = require("./listabsm");
var objetivosSemanais_1 = require("./objetivosSemanais");
var server = express();
var port = 3000;
server.get('/', function (request, response) {
    response.send('Hello World !');
});
server.get('/lista-bsm', function (request, response) {
    response.send((0, listabsm_1.listaBSM)());
});
server.get('/objetivos-semanais', function (request, response) {
    response.send((0, objetivosSemanais_1.objetivosSemanais)());
});
server.listen(port, function () {
    console.log("Server is running at port: ".concat(port));
});
