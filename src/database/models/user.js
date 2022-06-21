const User = (Sequelize, DataTypes) => {
  const User = Sequelize.define("User", {
    id:{
     type: DataTypes.INTEGER,
     primaryKey:true,
     autoIncrement:true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  });
  return User;
}

module.exports = User;