const Product = require('./Product');
const Category = require('./Category');

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASECADE'
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASECADE'
})

module.exports = { 
  Product,
  Category,
};