/**
 * Created by Patrick on 02.12.2015.
 */


var http = require("http");
var url = require("url");

http.createServer(function(request, respone){

    console.log("user connected");

    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;

    console.log(query);

    respone.writeHead(200, {"Content-Type":"text/plain"});
    respone.end("Sie haben sich erfolgreich auf den WebServer mir der Url 127.0.0.1:1337 verbunden");


}).listen(1337, "127.0.0.1");