const db = require("../models");

module.exports = {
    getAll: function (req, res) {
        db.Vocab.findAll({ where: { VocabListId: req.params.list_id }})
            .then(results => res.json(results))
            .catch(err => {
                console.log(err);
                res.send(err);
            })
    },
    getOne: function (req, res) {
        db.Vocab.findOne({ where: { id: req.params.vocab_id, VocabListId: req.params.list_id}})
            .then(results => res.json(results))
            .catch(err => {
                console.log(err);
                res.send(err);
            })
    },
    updateNote: function (req, res) {
        db.Vocab.update({
            note: req.body.note
        },
        { 
            where: { id: req.params.vocab_id, VocabListId: req.params.list_id }
        })
            .then(results => res.json(results))
            .catch(err => {
                console.log(err);
                res.send(err);
            })
    }
}