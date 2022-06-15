module.exports = (sequelize, DataTypes) => {
    const participer = sequelize.define('Participer', {
        code: {
            type: DataTypes.INTEGER,
            allowNull: true,
            autoIncrement: true,
            primaryKey: true
        },
        types: DataTypes.STRING,
        montant: {
            type: DataTypes.FLOAT,
            default:0
        },
    });
}