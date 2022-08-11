const categoryList = document.querySelector('ul#categories')
const categoriesItems = categoryList.children
console.log('Number of categories:', categoriesItems.length);



const catItem = document.querySelectorAll('#categories>li');
catItem.forEach(el => {
    const category = `Category: ${el.firstElementChild.textContent}`
    const elements= `Elements: ${el.lastElementChild.children.length}`
    console.log(category)
    console.log(elements)
});