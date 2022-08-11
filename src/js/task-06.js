const dataLength = document.querySelector('input')
// console.log(dataLength);

dataLength.addEventListener ('blur', isInputBlur)

function isInputBlur () {
    if(dataLength.value.length <= 6) {
        dataLength.classList.remove ('invalid')
        dataLength.classList.add ('valid')
    } else {
        dataLength.classList.remove ('valid')
        dataLength.classList.add ('invalid')
    }
}