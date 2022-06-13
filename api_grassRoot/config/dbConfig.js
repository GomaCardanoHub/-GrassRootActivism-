module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '12345',
    DB: 'db_cloud',
    dialect: 'mysql',
    PORT: 3306,
    pool: {
        max: 5,
        min: 0,
        acquire: 300000,
        idle:10000,
    }
}