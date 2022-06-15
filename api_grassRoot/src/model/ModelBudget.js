module.exports = (sequelize, DataTypes) => {
    const budgets = sequelize.define('Budgets', {
        code: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        montant: DataTypes.FLOAT,
        codeEvenement: DataTypes.INTEGER,
    });
    return budgets
}