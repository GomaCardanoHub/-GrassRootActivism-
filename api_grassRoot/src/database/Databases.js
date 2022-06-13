const url = require('../../config/dbConfig');
const { Sequelize,DataTypes} = require('sequelize');
const item = {};
const sequelize = Sequelize(
    url.DB,
    url.USER,
    url.PASSWORD,
    {
        host: url.HOST,
        dialect: url.dialect,
        operatorsAliases: 0,
        port: url.PORT,
        pool: {
            max: db.pool.max,
            min: db.pool.min,
            acquire: db.pool.acquire,
            idle: db.pool.idle,
        }
    }
);
sequelize.authenticate().then(() => {
    console.log("Connected...");
}).catch((error) => {
     console.log(`Failed to connect... ${error}`);
});
item.Sequelize = Sequelize;
item.sequelize = sequelize;

item.identifiers = require(`../model/ModelIdentifier`)(sequelize, DataTypes);
item.zode = require(`../model/ModelZone`)(sequelize, DataTypes);
item.organisation = require(`../model/ModelOrganisation`)(sequelize, DataTypes);
item.informations = require(`../model/ModelInformation`)(sequelize, DataTypes);
 
item.sequelize.sync({ force: true }).then(() => {
    console.log(`Yes re-sync done...`);
}).catch((error) => {
    console.log(`Failed to sync... ${error}`);
});
module.exports = item;