module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("Users", {
      code: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true,
      },
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      codeAgent: DataTypes.INTEGER,
    });
    return user;
  };
  