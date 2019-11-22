const Sequelize = require('sequelize');
const orm = new Sequelize('Checkout', 'root', '12091987Dwalter!', {host: 'localhost', dialect: 'mysql'});

var UserInfo = orm.define('userInfo', {
address1: Sequelize.STRING,
address2: Sequelize.STRING,
billzip: Sequelize.STRING,
cardnumber: Sequelize.STRING,
city: Sequelize.STRING,
cvv: Sequelize.STRING,
email: Sequelize.STRING,
expdate: Sequelize.STRING,
name: Sequelize.STRING,
password: Sequelize.STRING,
phone: Sequelize.STRING,
state: Sequelize.STRING,
zip: Sequelize.STRING
})

UserInfo.sync();
module.exports.UserInfo = UserInfo;



