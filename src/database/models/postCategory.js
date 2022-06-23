const postCategorieSchema = (Sequelize, DataTypes) => {
  const postCategorieTable = Sequelize.define("PostCategory", {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  });

  postCategorieTable.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPosts',
      through: postCategorieTable,
      foreignKey: 'categoryId',
      otherKey:'postId'
    }),
    models.BlogPost.belongsToMany(models.Category, {
      as:'categories',
      through: postCategorieTable,
      foreignKey: 'postId',
      otherKey:'categoryId'
    })
  }
  return postCategorieTable;
}

module.exports = postCategorieSchema;