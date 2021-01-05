let express = require('express');
//let uuid = require('node-uuid');
/*let cookieSession = require('cookie-session')
let Keygrip = require("keygrip") ;
let app = express();*/

let http = require('http'),
    httpProxy = require('http-proxy');
let isPortReachable = require('is-port-reachable');

let serversaddresses = [
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
       console.log(i);
       if(i >= serversaddresses.length){
         i = 0;
       }
  });

  console.log("listening on port 3000");
server.listen(3000);
}

/*(async () => {
  //console.log(await isPortReachable(3000, {host: 'google.com'}));
  let Portstatus = await isPortReachable(8080, {host: 'http://'+serversaddresses[i]})
  if(Portstatus == false){
       let index = serversaddresses.indexOf(i);
      if (index > -1) {
        serversaddresses.splice(index, 1);
        console.log(serversaddresses);
}
  }
    //=> true
})();*/

runproxy();


//Ping
/*let server = app.listen(3000, function(){
    let host = server.address().address;
    let port = server.address().port;
  console.log('Loadbalancer is running at http://%s:%s', host, port);
});

console.log(serversaddresses[1]);
let i = 0;*/




/*app.get('/', (req, res, next) => {
  //let i = uuid.v1().replace(/[^0-9]/g, '');
  console.log(i);
  //if(i % 2 == 1 ) { //Funktion anpassen
  if (i == 1) {
    console.log(serversaddresses[1]);
    res.redirect(301, 'http://'+serversaddresses[1]);
    console.log("Im here");
    i++;
    if(i > 1 ){
      i = 0;
    }
}
  //else if(i % 2 == 0){
    else if(i == 0) {
    console.log(i);
    console.log(serversaddresses[0]);
    res.redirect(301, 'http://'+serversaddresses[0]);
    console.log("Yes");
    i++;
    if(i > 1 ){
      i = 0;
    }
  }
});*/

/*app.use(cookieSession({
  name: 'sessionservercookie',
  keys: new Keygrip(['key1', 'key2'], 'SHA384'),
  // Cookie Options
  server: '',
  maxAge: 24 * 60 * 60 * 1000 // = 86400000 = 24 hours
}));*/


/*app.get('/', (req, res, next) => {
  /*if (req.sessionOptions.maxAge < 86400000){
    //let currentserver = req.session-server-cookie.server;
    res.redirect(301, 'http://'+currentserver);
  }
  console.log(i);
  res.redirect(301, 'http://'+serversaddresses[i]);
  //res.end(req.sessionservercookie.server + serversaddresses[i]);  
  //
  //let test = req.sessionservercookie.server;
  //console.log('It is' + test);

  //
  i+=1;
  console.log(serversaddresses.length);
  if(i >= serversaddresses.length){
    i = 0;
  }
});*/





