//When you click on a category button, only the products from that category will show on the homepage

const buttons = document.querySelectorAll('.category-names')

function getCategoryProducts (e) {
    const value = this.value
    document.location.replace(`/category/${value}`);
}

for (const button of buttons) {
    button.addEventListener('click', getCategoryProducts)
}

//When you click on an individual product, you are taken to the checkout page

const cards = document.querySelectorAll('.card')
    // const productIds = document.querySelectorAll('.product-id')

function getProductId () {
    const productIdEl = this.querySelector('.product-id')
    const productId = productIdEl.getAttribute('value')
    document.location.replace(`/checkout/${productId}`)
}

for (const card of cards) {
    card.addEventListener('click', getProductId)
}




