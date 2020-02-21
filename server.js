const express = require("express");
require('dotenv').config();
const session = require("express-session");
const passport = require("./config/passport");
const bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser());

// Routes
// =============================================================
require("./routes/user-api-routes")(app);
require("./routes/vocablist-api-routes")(app);
require("./routes/vocab-api-routes")(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.use(function (req, res, next) {
    if (req.method === 'GET' && req.accepts('html') && !req.is('json') &&
      !req.path.includes('.')) {
      res.sendFile('index.html', { root });
    } else next();
  });
};

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

