/**
 * 发送post请求
 */
const http = require('http')
const qs = require('querystring')

const data = qs.stringify({
  a: 1,
  b: 2
})
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': data.length
  }
}

const request = http.request(options, res => {
  const chunks = []
  // let size = 0
  res.on('data', chunk => {
    chunks.push(chunk)
    // size += chunk.length
  })

  res.on('end', () => {
    const buf = Buffer.concat(chunks)
    console.log(buf.toString())
  })
})

request.end(data)
