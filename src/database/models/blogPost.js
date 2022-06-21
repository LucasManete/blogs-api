const BlogPostSchema = (Sequelize, DataTypes) => {
  const blogPostTable = Sequelize.define("BlogPost", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
     },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  });
  return blogPostTable;
}

module.exports = BlogPostSchema;