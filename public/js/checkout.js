const ccNameEl = document.getElementById('cc-name')
const ccNumberEl = document.getElementById('cc-number')
const ccBillingEl = document.getElementById('cc-billing')
const productEl = document.querySelector('.product-name')
const submitBtn = document.getElementById('credit-card-btn')

//Click on checkout to send credit card and item information to credit card merchant site

function sendCcreditCardInfo () {
    e.preventDefault()
    const name = ccNameEl.value;
    const number = ccNumberEl.value;
    const billing = ccBillingEl.value;
    const product = productEl.textContent

    console.log(name, number, billing, product)

}








