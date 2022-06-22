const postCategorieSchema = (Sequelize, DataTypes) => {
  const postCategorieTable = Sequelize.define("PostCategory", {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  });

  postCategorieTable.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPosts',
      through: postCategorieTable,
      foreignKey: 'postId',
      otherKey:'categoryId'
    }),
    models.BlogPost.belongsToMany(models.Category, {
      as:'Categories',
      through: postCategorieTable,
      foreignKey: 'categoryId',
      otherKey:'postId'
    })
  }
  return postCategorieTable;
}

module.exports = postCategorieSchema;