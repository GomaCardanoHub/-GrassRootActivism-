module.exports = (sequelize, DataTypes) => {
  const Concerned = sequelize.define("tbConcerne", {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    codeEvenement: DataTypes.INTEGER,
    codeZones: DataTypes.INTEGER,
  });
  return Concerned;
};
