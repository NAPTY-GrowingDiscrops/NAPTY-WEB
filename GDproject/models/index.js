const Sequelize = require('sequelize');
const UserM = require('./User');
const GpostM = require('./gamePost');
const GcommM = require('./gamePostComment');
const SpostM = require('./ServicePost');
const ScommM = require('./ServicePostComment');

const sequelize = new Sequelize('gdproject', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

module.exports = {
  User: UserM(sequelize, Sequelize),
  // Gpost: GpostM(sequelize, Sequelize),
  // Gcomment: GcommM(sequelize, Sequelize),
  // Spost: SpostM(sequelize, Sequelize),
  // Scomment: ScommM(sequelize, Sequelize)
}

sequelize.sync().then(() => {
    console.log('[Model] Databases sync');
}).catch((err) => {
    console.log(err.massage);
});