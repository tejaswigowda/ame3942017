var http = require("http");

var callback = function (req, res) { // req -> request object; res -> response object
  var eq = req.url.replace("/","");;
  var r = eq + " = " + eval(eq).toString() + "\n";
   res.writeHead(200, {'Content-Type': 'text/plain'}); // send response header
   res.end(r); // send response body
}

var server = http.createServer(callback) // create an http server
server.listen(1234, "127.0.0.1"); // make server listen to port 1234
console.log("Server running at: "+ "http://127.0.0.1:1234");
