const express = require('express')
const app = express()
const PORT = 5000

math = []

app.use(express.urlencoded({extended : true}))

app.use(express.static('server/public'))

app.post('/math', function(req, res) {
    console.log('POST /math')
    console.log(req.body)
    math.push(req.body)
    res.sendStatus(200)
})

app.get('/math', function(req, res) {
    console.log('GET /math')
    res.send(math)
})

app.listen(PORT, function() {
    console.log('lisenting on port', PORT)
})