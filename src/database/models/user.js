const UserSchema = (Sequelize, DataTypes) => {
  const UserTable = Sequelize.define("User", {
    id: DataTypes.INTEGER,
    displayName: DataTypes.String,
    email: DataTypes.String,
    password: DataTypes.String,
    image: DataTypes.String,
  });
  return UserTable;
}

module.exports = UserSchema;