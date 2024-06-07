const Product = require('./Product');
const Category = require('./Category');

Category.hasMany(Product, {
<<<<<<< HEAD
  foreignKey: 'category_id',
=======
>>>>>>> 7a5e3d02d94d16dbdb02f87912d463814f017cff
  onDelete: 'CASCADE'
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
})

module.exports = { 
  Product,
  Category,
};