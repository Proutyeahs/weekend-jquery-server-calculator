console.log('hello')

$(ready)

function ready() {
    console.log('jQuery')
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
}

let number;
let operator;

// this needs to reset dom.. after an operator is pressed delete past stored data
function clear() {
    $('#number').val('')
}

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
    $('#number').val($('#number').val() + '.');
}

function clickAdd() {
    console.log('clicked')
    number = $('#number').val()
    operator = '+'
    $('#number').val('')
    console.log(number)
    // $('#number').val($('#number').val() + '+');
}

function clickMin() {
    console.log('clicked')
    number = $('#number').val()
    operator = '-'
    $('#number').val('')
    console.log(number)
    // $('#number').val($('#number').val() + '-');
}

function clickMul() {
    console.log('clicked')
    number = $('#number').val()
    operator = '*'
    $('#number').val('')
    console.log(number)
    // $('#number').val($('#number').val() + '*');
}

function clickDiv() {
    console.log('clicked')
    number = $('#number').val()
    operator = '/'
    $('#number').val('')
    console.log(number)
    // $('#number').val($('#number').val() + '/');
}

function clickeq() {
    console.log('clicked')
    let number2;
    number2 = $('#number').val()
    console.log(number)
    console.log(number2)
    console.log(operator)
    $.ajax({
        mthod : "POST",
        url : '/math',
        data : {
            number : number,
            number2 : number2,
            operator : operator
        }
    }).then(function(responce) {
        console.log(responce)
        getMath()
    })
}

function getMath() {
    console.log('in math')
    $.ajax({
        method : 'GET',
        url : '/math'
    }).then(function(responce) {
        console.log(responce)
        renderToDom()
    })
    console.log('end meth')
}

function renderToDom(math) {
    $('#result').append(`
        <li>${math}</li>
    `)
}