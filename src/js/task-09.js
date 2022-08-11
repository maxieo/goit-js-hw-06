function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = document.querySelector (`.change-color`)
const body = document.querySelector ('body')
const colorText = document.querySelector (`.color`)

colorText.textContent = `Click to the "Change Color" button`

changeColor.addEventListener ('click', onChangeColor)

function onChangeColor (event) {
  body.style.backgroundColor = getRandomHexColor()
  colorText.innerHTML = `${getRandomHexColor()}`
}