const { vocabController } = require('../controllers');

module.exports = function (app) {
    app.get("/:list_id/vocab", vocabController.getAll);
    app.get("/:list_id/:vocab_id", vocabController.getOne);
}