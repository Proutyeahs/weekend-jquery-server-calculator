console.log('hello')

$(ready)

function ready() {
    console.log('jQuery')
    $('#1').on('click', getVal)
}

function assignVal() {
    let val;
    if ($('#1')) {
        val = 1
    } else if ($('#2')) {
        val = 2
    } else if ($('#3')) {
        val = 3
    } else if ($('#4')) {
        val = 4
    } else if ($('#5')) {
        val = 5
    } else if ($('#6')) {
        val = 6
    } else if ($('#7')) {
        val = 7
    } else if ($('#8')) {
        val = 8
    } else if ($('#9')) {
        val = 9
    } else if ($('#+')) {
        val = '+'
    } else if ($('#-')) {
        val = '-'
    } else if ($('#*')) {
        val = '*'
    } else if ($('#.')) {
        val = '.'
    } else if ($('#/')) {
        val = '/'
    } else if ($('#c')) {
        val = 'c'
    } else if ($('#=')) {
        run()
    }
    appendNumbers(val)
}

// appending the number from the button into the input box
function appendNumbers() {
    let info = $(this).val()
    console.log(info)
    $('#number').append(info)
}