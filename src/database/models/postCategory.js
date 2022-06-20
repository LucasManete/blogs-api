const postCategorieSchema = (Sequelize, DataTypes) => {
  const postCategorieTable = Sequelize.define("PostCategory", {
    postId: DataTypes.Integer,
    categoryId: DataTypes.Integer,
  });
  return postCategorieTable;
}

module.exports = postCategorieSchema;