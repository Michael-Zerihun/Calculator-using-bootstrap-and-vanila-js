let operand = document.getElementById('operand')
let result = document.getElementById('result')

let dic = {
    'btn-1': 1,
    'btn-2': 2,
    'btn-3': 3,
    'btn-4': 4,
    'btn-5': 5,
    'btn-6': 6,
    'btn-7': 7,
    'btn-8': 8,
    'btn-9': 9,
    'btn-0': 0,
    'btn-dot': '',
}

let bucket = 0
let hold = null

let add = () => bucket + parseFloat(operand.value)
let sub = () => bucket - parseFloat(operand.value)
let div = () => bucket / parseFloat(operand.value)
let mul = () => bucket * parseFloat(operand.value)
function mop() {
    alert('hi')
}
let op = {
    'btn-a': add,
    'btn-s': sub,
    'btn-m': mul,
    'btn-d': div,
}

let app = (btn) => {
    const regex = /\./g
    if (btn.id in dic) {
        operand.value +=
            btn.id === 'btn-dot' && !operand.value.match(regex)
                ? '.'
                : dic[btn.id].toString()
    } else {
        if (hold === null) {
            hold = btn.id
            bucket = operand.value !== '' ? parseFloat(operand.value) : 0
            operand.value = ''
            result.innerHTML = bucket
        } else if (btn.id in op) {
            bucket = op[hold]()
            result.innerHTML = bucket
            operand.value = ''
            hold = btn.id
        } else if (btn.id === 'btn-e') {
            result.innerHTML = ''
            operand.value = op[hold]()
        } else {
            operand.value = ''
            result.innerHTML = ''
            bucket = 0
            hold = null
        }
    }
}
