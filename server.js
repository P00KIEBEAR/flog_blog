// Dependencies
// =============================================================
const express = require('express');
const exphbs = require('express-handlebars');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine
//
// YOUR CODE HERE
//
app.engine("handlebars", handlebars({ DefaultLayout: "main" }));
app.set("view engine", handlebars);
// Data
// =============================================================

// Routes
// =============================================================

app.get('/', (req, res) => {
  res.render('index')


});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});
