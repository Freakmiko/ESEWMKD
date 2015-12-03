/**
 * Created by Patrick on 02.12.2015.
 */


var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(request, respone){

    if (request.url == "/favicon.ico")
        return;

    console.log("user connected");

    // extract the arguments from the url so that we can use them and write them to the file
    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;
    fs.appendFile("form.txt", query["vorname"] + " " + query["name"] + ", "
        + query["jahr"] + ", " + query["hcoach"] + ", " + query["acoach"] + ", " + query["position"]
        + ", " + query["number"] + "\n");

    respone.writeHead(200, {"Content-Type":"text/plain"});
    respone.end("Sie haben sich erfolgreich auf den WebServer mir der Url 127.0.0.1:1337 verbunden");
}).listen(1337, "127.0.0.1");