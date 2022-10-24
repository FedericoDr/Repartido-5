const http = require('http')

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello, good morning...')
    console.log("ty")
})

const PORT = 3010
app.listen(PORT)
console.log(`Server running on port ${PORT}`)