
const app = require("express")();

const express = require("express");
const axios = require('axios');
app.use(express.static(__dirname + '/public'));
const http = require("http").Server(app);
const io = require("socket.io")(http);
app.get("/", function(req, res){
        res.sendFile("index.html")
});
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort("/dev/ttyUSB0");

const parser = port.pipe(new Readline({ delimiter: '\n' }))

parser.on("open", function(){
         console.log("Open");
 });
parser.on("data", function(dados){
        var dadosJson = JSON.stringify(dados);
    
        var temperatura = dadosJson.slice(17, 22);
        var umidade = dadosJson.slice(33, 38);
        console.log(umidade);
        console.log(temperatura);

        axios.get(("http://sipagmt.getenjoyment.net/php/set.php?p=MarcusSouza-Lucas-Roberto&lat=-19.9984207&lon=-44.0083239&t="+temperatura+"&u="+umidade));

 });    