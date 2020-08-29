const http = require('http');
let app = http.createServer((req,res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('html/register.html');
})
app.listen(3000, '127.0.0.1');
console.log("Running");
