const UserSchema = (Sequelize, DataTypes) => {
  const UserTable = Sequelize.define("User", {
    displayName: DataTypes.String,
    email: DataTypes.String,
    password: DataTypes.String,
    image: DataTypes.String,
  });
  return UserTable;
}

module.exports = UserSchema;