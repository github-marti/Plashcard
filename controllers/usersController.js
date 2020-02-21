const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.User.create({
            email: req.body.email,
            username: req.body.username,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password
        })
            .then(results => res.send(results.data))
            .catch(err => { console.log(err); })
    },
    logOut: function (req, res) {
        req.logout();
        res.redirect("/");
    },
    getUserData: function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.send(false);
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                username: req.user.username,
                id: req.user.id,
                phoneNumber: req.user.phoneNumber
            })
        }
    }
}