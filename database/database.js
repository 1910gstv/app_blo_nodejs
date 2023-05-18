const Sequelize = require("sequelize");

const connection = new Sequelize('appBlog', 'root', 'Gtvhq1501@', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;