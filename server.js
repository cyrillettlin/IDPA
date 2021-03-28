//let express = require('express');
//let uuid = require('node-uuid');
/*let cookieSession = require('cookie-session')
let Keygrip = require("keygrip") ;
let app = express();*/

//Call the needed modules
let http = require('http'),
    httpProxy = require('http-proxy');
let isPortReachable = require('is-port-reachable');

//Put your IP-address with the needed port into this array
let serversaddresses = [
    //Example 
    //"127.0.0.1:8080",
    "127.0.0.1:8080",
    "127.0.0.1:5050"
];


let i = 0;

function runproxy(){
  let proxy = httpProxy.createProxyServer({});
  let server = http.createServer(function(req, res) {
    proxy.web(req, res, { 
       target: 'http://'+serversaddresses[i]});
       i+=1;
       console.log("We are on server number: ", i);
       if(i >= serversaddresses.length){
         i = 0;
       }
  });

  console.log("listening on port 3000");
server.listen(3000);
}


/*function runproxy(){
  let randomnumber = Math.random();
  randomnumber = randomnumber % 2;
  let proxy = httpProxy.createProxyServer({});
  let randomnumber = Math.random();
  randomnumber = randomnumber % 2;
  let server = http.createServer(function(req, res) {
    proxy.web(req, res, { 
       target: 'http://'+serversaddresses[randomnumber]});
      randomnumber = Math.random();
       console.log(i);
       if(i >= serversaddresses.length){
       }
  });

  console.log("listening on port 3000");
server.listen(3000);
}*/

runproxy();







