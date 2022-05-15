var http = require("http");
var server = http.createServer(function (peticion, respuesta){
   respuesta.end("Hola Evans");
});
server.listen(3000, function(){
   console.log("Su servidor es " + this.address().port);
});