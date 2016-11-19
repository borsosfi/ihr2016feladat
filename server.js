var http = require('http');

http.createServer((res, req) => {
    res.end("Hiába működik, töltsd le gitről!!");
}).lisen(5214);