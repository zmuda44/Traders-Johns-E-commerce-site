const { Product } = require('../models');

const productData = [
  {
    product_name: 'Lettuce',
    description: 'Organic head of lettuce',
    price: 3,
    category_id: 1
  },
  {
    product_name: 'Tomatoes',
    description: 'Organic tomatos',
    price: 2,
    category_id: 1
  },
  {
    product_name: 'Cucumbers',
    description: 'Organic cucumbers',
    price: 6,
    category_id: 1
  },
  {
    product_name: 'Chicken Breast',
    description: '1 pound of fresh chicken breast.',
    price: 8,
    category_id: 2
  },
  {
    product_name: 'Ground Beef',
    description: '1 pound a freshly ground beef.',
    price: 8,
    category_id: 2
  },
  {
    product_name: 'Talapia',
    description: 'Idividualy packaged talapia fillets.',
    price: 15,
    category_id: 3
  },
  {
    product_name: 'Milk',
    description: '1 gallon of 2% milk.',
    price: 4,
    category_id: 4
  },
  {
    product_name: 'Cheddar Cheese',
    description: 'A block of cheddar cheese.',
    price: 10,
    category_id: 4
  },
  {
    product_name: 'Potato Chips',
    description: '1 bag of chips.',
    price: 4,
    category_id: 5
  },
  {
    product_name: 'Chocolate Cookies',
    description: '1 box of chocolate cookies.',
    price: 6,
    category_id: 5
  },
  {
    product_name: 'Spagetti',
    description: '1 box of spagetti.',
    price: 2,
    category_id: 6
  },
  {
    product_name: 'Rice',
    description: '20 lb bag of rice.',
    price: 25,
    category_id: 6
  },
  {
    product_name: 'Sliced Tomatoes',
    description: '1 large can of sliced tomatoes.',
    price: 6,
    category_id: 7
  },
  {
    product_name: 'Ketchup',
    description: '1 bottle of ketchup.',
    price: 4,
    category_id: 8
  },
  {
    product_name: 'Apple Pie',
    description: '1 freshly baked apple pie.',
    price: 5,
    category_id: 9
  },
  {
    product_name: 'Fruit Circles',
    description: '1 box of colorful fruit rings',
    price: 5,
    category_id: 10
  },
  {
    product_name: 'Vanilla Ice-Cream',
    description: '1 tub of icecream',
    price: 5,
    category_id: 11
  },
]



const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
