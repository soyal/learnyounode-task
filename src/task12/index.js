/**
 * task12: 创建一个接受post请求的服务器，将post请求的body转换成大写并返回
 */
const createServer = require('./server')

createServer(process.argv[2])
