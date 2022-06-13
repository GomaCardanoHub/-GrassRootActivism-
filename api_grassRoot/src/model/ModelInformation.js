module.exports = (sequelize, DataTypes) => {
  const Information = sequelize.define('tbInformations', {
    code: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
      },
      title: DataTypes.STRING(100)
      context: DataTypes.STRING,

  })
}
