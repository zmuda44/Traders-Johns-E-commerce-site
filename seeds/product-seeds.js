const { Product } = require('../models');
console.log("hello")

const productData = [
  {
    product_name: 'Lettuce',
    description: 'Organic head of lettuce',
    price: 3
  },
  {
    product_name: 'Tomatoes',
    description: 'Organic tomatos',
    price: 2
  },
  {
    product_name: 'Cucumbers',
    description: 'Organic cucumbers',
    price: 14
  },
]



const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
