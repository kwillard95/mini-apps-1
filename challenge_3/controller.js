// const UserInfo = require('./db.js');

const Sequelize = require('sequelize');

const orm = new Sequelize('Checkout', 'root', '12091987Dwalter!', { host: 'localhost', dialect: 'mysql' });

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

module.exports = {
    post: function (req, res) {
        UserInfo.create({
            address1: req.body.address1,
            address2: req.body.address2,
            billzip: req.body.billzip,
            cardnumber: req.body.cardnumber,
            city: req.body.city,
            cvv: req.body.cvv,
            email: req.body.email,
            expdate: req.body.expdate,
            name: req.body.name,
            password: req.body.password,
            phone: req.body.phone,
            state: req.body.state,
            zip: req.body.zip
        })
            .then(function (results) {
                console.log(results.id);
                return UserInfo.findAll({
                    where: {
                        id: results.id
                    }
                })
            })
            .then(function (result) {
                res.json(result)
            }).catch((err) => {
                console.log(err)
            })
    }
}