const { vocabListController } = require('../controllers');

module.exports = function(app) {
    app.get("/vocab_lists", vocabListController.getAll);
    app.get("/vocab_list/:list_id", vocabListController.getOne);
}