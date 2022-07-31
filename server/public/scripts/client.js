console.log('hello')

$(ready)

function ready() {
    // click listeners 
    $('#0').on('click', click0)
    $('#1').on('click', click1)
    $('#2').on('click', click2)
    $('#3').on('click', click3)
    $('#4').on('click', click4)
    $('#5').on('click', click5)
    $('#6').on('click', click6)
    $('#7').on('click', click7)
    $('#8').on('click', click8)
    $('#9').on('click', click9)
    $('#min').on('click', clickMin)
    $('#mul').on('click', clickMul)
    $('#div').on('click', clickDiv)
    $('#add').on('click', clickAdd)
    $('#dot').on('click', clickDot)
    $('#eq').on('click', clickeq)
    $('#c').on('click', clear)
    $('#clear').on('click', clearInput)
}
// global vars for each number and the operator
let number = ''
let number2 = ''
let operator = ''
// clear button, empties input and saved values
function clear() {
    $('#number').val('')
    number = ''
    number2 = ''
    operator = ''
}
// clears current input
function clearInput() {
    $('#number').val('')
}

// assigning values into the input when each button is pressed
function click0() {
    console.log('clicked')
    $('#number').val($('#number').val() + 0);
}

function click1() {
    console.log('clicked')
    $('#number').val($('#number').val() + 1);
}

function click2() {
    console.log('clicked')
    $('#number').val($('#number').val() + 2);
}

function click3() {
    console.log('clicked')
    $('#number').val($('#number').val() + 3);
}

function click4() {
    console.log('clicked')
    $('#number').val($('#number').val() + 4);
}

function click5() {
    console.log('clicked')
    $('#number').val($('#number').val() + 5);
}

function click6() {
    console.log('clicked')
    $('#number').val($('#number').val() + 6);
}

function click7() {
    console.log('clicked')
    $('#number').val($('#number').val() + 7);
}

function click8() {
    console.log('clicked')
    $('#number').val($('#number').val() + 8);
}

function click9() {
    console.log('clicked')
    $('#number').val($('#number').val() + 9);
}

function clickDot() {
    console.log('clicked')
    // making sure only one decimal can be input
    if ($('#number').val().includes('.')) {
        return alert('Only one decimal allowed!')
    } else {
        $('#number').val($('#number').val() + '.');
    }
}
// checks if the value is a number, assigns the first number and operator upon clicking specified operator then empties the input feild
function clickAdd() {
    if ( Number($('#number').val())) {
        console.log('clicked')
        number = $('#number').val()
        operator = '+'
        $('#number').val('')
        console.log(number)
    } else {
        alert('Numbers only!')
    }
}

function clickMin() {
    // allowing use of - for negative numbers as well as the operator
    if ($('#number').val() == '') {
        $('#number').val($('#number').val() + '-')
    } else if ($('#number').val() == '-') {
        alert('Input a number please!')
    } else if (Number($('#number').val())){
        console.log('clicked')
        number = $('#number').val()
        operator = '-'
        $('#number').val('')
        console.log(number)
    } else {
        alert('Numbers only!')
    }
}

function clickMul() {
    if ( Number($('#number').val())) {
        console.log('clicked')
        number = $('#number').val()
        operator = '*'
        $('#number').val('')
        console.log(number)
    } else {
        alert('Numbers only!')
    }
}

function clickDiv() {
    if ( Number($('#number').val())) {
        console.log('clicked')
        number = $('#number').val()
        operator = '/'
        $('#number').val('')
        console.log(number)
    } else {
        alert('Numbers only!')
    }
}
// gets the answer back from the server
function getMath() {
    console.log('in math')
    $.ajax({
        method : 'GET',
        url : '/math'
    }).then(function(response) {
        console.log(response)
        answerToDom(response) // puts answer on DOM
    })
    console.log('end math')
}
// sends data to the server when equals is clicked
function clickeq() {
    // makes sure all values are assigned
    if ($('#number').val() == '' || operator == '') {
        return alert('Input left blank!')
    // checks if the value is a number
    } else if ( Number($('#number').val())) {
        number2 = $('#number').val()
        $('#number').val('')
        console.log(number)
        console.log(number2)
        console.log(operator)
        $.ajax({
            method : "POST",
            url : '/math',
            data : {
                num : number,
                num2 : number2,
                op : operator
            }
        }).then(function(response) {
            console.log(response)
            getMath() // runs next function to receive answer from the server
            equationToDom() // puts the equation on the DOM
            clear() // clears stored data for next equation
        })
    } else {
        alert('Numbers only!')
    }
}
// puts the answer on the dom
function answerToDom(answers) {
    for (let answer of answers) {
        $('#answer').empty()
        $('#answer').append(`${answer.ans}`)
    }
}
// puts the equation on the dom
function equationToDom() {
        $('#result').prepend(`
        <li>${number} ${operator} ${number2}</li>
    `)
}