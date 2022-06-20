const categorieSchema = (Sequelize, DataTypes) => {
  const categorieTable = Sequelize.define("Category", {
    id: DataTypes.Integer,
    name: DataTypes.String,
  });
  return categorieTable;
}

module.exports = categorieSchema;