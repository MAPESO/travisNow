const { createServer } = require('http')
const express =  require('express')

const app = express()
const server = createServer(app)
const port = process.env.NODE_ENV || 3000

app.get('/', (req, res) => {
    res.send('<h1>Hi, Now :)</h1>')
    res.end()
})

server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready On http://localhost:${port}`)
})