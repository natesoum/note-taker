// Include libraries
const express = require("express");

// Tell node that we are creating an "express" server
const app = express();

// Declare PORT variable
const PORT = process.env.PORT || 3001;

// Include express methods for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Require both API & HTML Routes
require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

// PORT LISTENER
app.listen(PORT, function () {
  console.log(`Server is listening on PORT: http://localhost:${PORT}`);
});
