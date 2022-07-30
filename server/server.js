const express = require('express')
const app = express()
const PORT = 5000

equations = []
answers = []

app.use(express.urlencoded({extended : true}))

app.use(express.static('server/public'))

function calc() {
    let answer;
    for (let value of equations)
        if (value.op == '+') {
            answer = Number(value.num) + Number(value.num2)
        } else if (value.op == '-') {
            answer = Number(value.num) - Number(value.num2)
        } else if (value.op == '*') {
            answer = Number(value.num) * Number(value.num2)
        } else if (value.op == '/') {
            answer = Number(value.num) / Number(value.num2)
        }
    return answers.push({ans : answer})
}

app.get('/math', function(req, res) {
    console.log('GET /math')
    res.send(answers)
})

app.post('/math', function(req, res) {
    console.log('POST /math')
    console.log(req.body)
    equations.push(req.body)
    calc(equations)
    res.sendStatus(200)
})

app.listen(PORT, function() {
    console.log('lisenting on port', PORT)
})