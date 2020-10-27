const Sequelize = require('sequelize');

const sequelize = new Sequelize('gdproject', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,

  define: {
    timestamps: false
  }
});



module.exports = {
  
}

sequelize.sync().then(() => {
    console.log('[Model] Databases sync');
}).catch((err) => {
    console.log(err.massage);
});