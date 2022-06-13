module.exports = (sequelize, DataTypes) => {
  const Concerned = sequelize.define("tbConcerne", {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    codeIdentifier: DataTypes.INTEGER,
    codeInformation: DataTypes.INTEGER,
    codeZones: DataTypes.INTEGER,
  });
  return Concerned;
};
