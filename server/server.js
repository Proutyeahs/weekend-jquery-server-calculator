// import and create instance of express
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
// global arrays to store data input from client and the answers
equations = []
answers = []
// lets data be acessible from the post requests
app.use(express.urlencoded({extended : true}))
// serve static files in the folder
app.use(express.static('server/public'))
// checks the opperator and runs corresponding calculation
function calc() {
    let answer;
    // loops through the equation array and gets the values from the data object
    for (let value of equations) {
        if (value.op == '+') {
            answer = Number(value.num) + Number(value.num2)
        } else if (value.op == '-') {
            answer = Number(value.num) - Number(value.num2)
        } else if (value.op == '*') {
            answer = Number(value.num) * Number(value.num2)
        } else if (value.op == '/') {
            answer = Number(value.num) / Number(value.num2)
        }
    }
    return answers.push({ans : answer}) // puts the result in the answers array as an object
}
// sends the answer back to the client
app.get('/math', function(req, res) {
    console.log('GET /math')
    res.send(answers)
})
// sends the equations back to the client
app.get('/equations', function(req, res) {
    console.log('GET /equations')
    res.send(equations)
})
// receives the data from the client
app.post('/math', function(req, res) {
    console.log('POST /math')
    console.log(req.body)
    equations.push(req.body) // puts the data in the equations array
    calc(equations) // runs the data through the calculator function
    res.sendStatus(200) // OK
})
// starting app
app.listen(PORT, function() {
    console.log('lisenting on port', PORT)
})