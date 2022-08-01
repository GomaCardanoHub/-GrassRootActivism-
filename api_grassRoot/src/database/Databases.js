const url = require('../../config/dbConfig')
const { Sequelize, DataTypes } = require('sequelize')
const item = {}
const sequelize =new Sequelize(url.DB, url.USER, url.PASSWORD, {
  host: url.HOST,
  dialect: url.dialect,
  operatorsAliases: 0,
  port: url.PORT,
  pool: {
    max: url.pool.max,
    min: url.pool.min,
    acquire: url.pool.acquire,
    idle: url.pool.idle,
  },
})
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected...')
  })
  .catch((error) => {
    console.log(`Failed to connect... ${error}`)
  })
item.Sequelize = Sequelize
item.sequelize = sequelize

item.participant = require(`../model/ModelParticipant`)(sequelize, DataTypes)
item.participer = require(`../model/ModelParticiper`)(sequelize, DataTypes)
item.budget = require(`../model/ModelBudget`)(sequelize, DataTypes)
item.zone = require(`../model/ModelZone`)(sequelize, DataTypes)
item.organisation = require(`../model/ModelOrganisation`)(sequelize, DataTypes)
item.evenement = require(`../model/ModelEvenement`)(sequelize, DataTypes)
item.users = require(`../model/ModelUser`)(sequelize, DataTypes)
item.agents = require(`../model/ModelAgent`)(sequelize, DataTypes)

item.sequelize
  .sync({ force: true })
  .then(() => {
    console.log(`Yes re-sync done...`)
  })
  .catch((error) => {
    console.log(`Failed to sync... ${error}`)
  })

module.exports = item
