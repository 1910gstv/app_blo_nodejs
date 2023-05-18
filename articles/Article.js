const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }, body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Category.hasMany(Article)// Uma categoria tem muitos artigos = Criamos um relacionamento 1 para muitos
Article.belongsTo(Category); //Um artigo pertence à uma categoria - Criamos um relacionamento 1 para 1

//Atualizar o banco de dados - Sincronizar as tabelas: devemos remover depois das tabelas criadas, senão ele vai criar várias tabelas
// Article.sync({ force : true })

module.exports = Article;