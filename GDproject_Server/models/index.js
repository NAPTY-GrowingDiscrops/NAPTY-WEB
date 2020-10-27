const Sequelize = require('sequelize');

const sequelize = new Sequelize('gdproject', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,

  define: {
    timestamps: false
  }
});

const UserM = require('./User');
const PostM = require('./Post');
const CommentM = require('./Comment'); 
const SPostM = require('./SPost');
const SCommentM = require('./SComment');

module.exports = {
  User: UserM(sequelize, Sequelize),
  Post: PostM(sequelize, Sequelize),
  Comment: CommentM(sequelize, Sequelize),
  SPost: SPostM(sequelize, Sequelize),
  SComment: SCommentM(sequelize, Sequelize),
}

sequelize.sync().then(() => {
    console.log('[Model] Databases sync');
}).catch((err) => {
    console.log(err.massage);
});