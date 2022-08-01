module.exports = (sequelize, DataTypes) => {
  const Agent = sequelize.define('Agents', {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    nom: DataTypes.STRING,
    postnom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    contact: DataTypes.STRING,
    email: DataTypes.STRING,
    matricule: DataTypes.STRING,
  })
  return Agent
}
