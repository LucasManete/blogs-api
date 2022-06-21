const postCategorieSchema = (Sequelize, DataTypes) => {
  const postCategorieTable = Sequelize.define("PostCategory", {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  });
  return postCategorieTable;
}

module.exports = postCategorieSchema;