module.exports = (sequelize, DataTypes) => {
    const Zone = sequelize.define('tbZone', {
        code: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true
        },
        designation: DataTypes.STRING,
        long: DataTypes.STRING,
        lat: DataTypes.STRING
    });
    return Zone;
}