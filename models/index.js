const Product = require('./Product');
const Category = require('./Category');

Category.hasMany(Product, {
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