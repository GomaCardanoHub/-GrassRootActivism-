module.exports = (sequelize, DataTypes) => {
  const Identifier = sequelize.define("Participant", {
    code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
    },
      nomComplet: DataTypes.STRING,
      sexe: DataTypes.STRING,
      dateLieu: DataTypes.STRING,
      tel: DataTypes.STRING,
      mail: DataTypes.STRING,
      address: DataTypes.STRING
  });
    return Identifier;
};
