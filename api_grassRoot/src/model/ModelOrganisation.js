module.exports = (sequelize, DataTypes) => {
  const Orgasations = Sequelize.define('Orgasation', {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    designation: DataTypes.STRING,
    descrignation: DataTypes.STRING,
  })
  return Orgasations
}
