const input = document.querySelector("#validation-input")
// console.log(dataLength);

input.addEventListener ('blur', isInputBlur)

function isInputBlur () {
    if(+input.value.length === +input.dataset.length) {
        input.classList.remove ('invalid')
        input.classList.add ('valid')
    } else {
        input.classList.remove ('valid')
        input.classList.add ('invalid')
    }
}