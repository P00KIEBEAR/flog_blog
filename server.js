// Dependencies
// =============================================================
const express = require('express');
const handlebars = require('express-handlebars');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine
//
// YOUR CODE HERE
//
app.engine("hbs", handlebars({ DefaultLayout: "main" }));
app.set("view engine", "hbs");
// Data
// =============================================================

// Routes
// =============================================================

app.get('/', (req, res) => {
  res.render('main')


});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});
