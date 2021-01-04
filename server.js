let express = require('express');
let uuid = require('node-uuid');
let app = express();

let serversaddresses = [
    "127.0.0.1:80",
    "127.0.0.1:8080"
]

let server = app.listen(3000, function(){
    let host = server.address().address;
    let port = server.address().port;
  console.log('Loadbalancer is running at http://%s:%s', host, port);
});

console.log(serversaddresses[1]);
let i = 0;

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

app.get('/', (req, res, next) => {
  console.log(i);
  res.redirect(301, 'http://'+serversaddresses[i]);
  i+=1;
  console.log(serversaddresses.length);
  if(i >= serversaddresses.length){
    i = 0;
  }
});





