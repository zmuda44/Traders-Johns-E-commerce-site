//When you click on a category button, only the products from that category will show on the homepage

const buttons = document.querySelectorAll('.category-names')

function getCategoryProducts (e) {
    const value = this.value
    document.location.replace(`/products/${value}`);
}

for (const button of buttons) {
    button.addEventListener('click', getCategoryProducts)
}


