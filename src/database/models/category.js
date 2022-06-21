const categorieSchema = (Sequelize, DataTypes) => {
  const categorieTable = Sequelize.define("Category", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
     },
    name: DataTypes.STRING,
  });
  return categorieTable;
}

module.exports = categorieSchema;