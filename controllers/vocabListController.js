const db = require('../models');

module.exports = {
    getAll: function (req, res) {
        db.VocabList.findAll({
            order: [
                ['level', 'ASC']
            ]
        })
            .then(results => res.json(results))
            .catch(err => {
                res.send(err);
            })
    },
    getOne: function (req, res) {
        db.VocabList.findOne({
            where: {
                id: req.params.list_id
            }
        })
            .then(results => res.json(results))
            .catch(err => {
                console.log(err);
                res.send(err);
            })
    }
}