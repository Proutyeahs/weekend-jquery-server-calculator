const express = require('express')
const app = express()
const PORT = 5000

equation = []
answers = []

app.use(express.urlencoded({extended : true}))

app.use(express.static('server/public'))

function calc() {
    let answer;
        if (value.op == '+') {
            answer = value.num + value.num2
        } else if (value.op == '-') {
            answer = value.num - value.num2
        } else if (value.op == '*') {
            answer = value.num * value.num2
        } else if (value.op == '/') {
            answer = value.num / value.num2
        }
    return answers.push(answer)
}

app.get('/math', function(req, res) {
    console.log('GET /math')
    res.send(equation)
})


app.post('/math', function(req, res) {
    console.log('POST /math')
    console.log(req.body)
    equation.push(req.body)
    
    res.sendStatus(200)
})

app.listen(PORT, function() {
    console.log('lisenting on port', PORT)
})