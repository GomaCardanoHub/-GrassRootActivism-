module.exports = (sequelize, DataTypes) => {
    const Information = sequelize.define('Evenement', {
        code: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true,
        },
        title: DataTypes.STRING,
        context: DataTypes.STRING,
        codeOrganisation: DataTypes.INTEGER,

    });
    return Information;
}
