module.exports = (sequelize, DataTypes) => {
    const evenement = sequelize.define('Evenement', {
        code: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true,
        },
        title: DataTypes.STRING,
        context: DataTypes.STRING,
        dateAdd: DataTypes.STRING,
        codeOrganisation: DataTypes.INTEGER,

    });
    return evenement;
}
