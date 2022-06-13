module.exports = (sequelize, DataTypes) => {
  const Orgasations = Sequelize.define('tbOrgasation', {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    designation: DataTypes.STRING,
    designation: DataTypes.STRING,
  })
  return Orgasations
}
