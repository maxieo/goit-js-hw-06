const fontSize = document.querySelector ('#font-size-control')
const textSize = document.querySelector ('#text')

fontSize.addEventListener ('input', changeSize)

function changeSize (event) {
    textSize.style.fontSize = `${event.currentTarget.value}px`
}