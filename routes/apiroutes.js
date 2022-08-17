// Include libraries
const fs = require('fs');

// Export routes to server.js
module.exports = function (app) {

  // API GET Request
  app.get("/api/notes", (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      dbData = JSON.parse(data);
      res.send(dbData);
    });
  });
};
