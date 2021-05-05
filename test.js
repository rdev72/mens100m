// const net = require('net');

// const server = net.createServer(conn => {conn.write('hhhhh')
// conn.on('data',dd => console.log(dd))
// }).listen(1234);

//server.on('connection',d => console.log(d))

const net = require('net');

var conn


const server = net.createServer(myconn => {
    conn = myconn
    conn.write('hhhhh')
// conn.on('data',dd => console.log(dd))

}).listen(1234)
conn.on('connection',d => console.log(d))
