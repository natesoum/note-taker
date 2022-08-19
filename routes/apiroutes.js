// Include libraries
const fs = require('fs');

// Export routes to server.js
module.exports = function (app) {

  // API GET REQUEST
  app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      let dbData = JSON.parse(data);
      res.send(dbData);
    });
  });

  // API POST REQUEST
  app.post('/api/notes', function(req, res) {
    const userNotes = req.body;

    // READFILE
    fs.readFile('./db/db.json', (err, data) => {
        let dbData = JSON.parse(data);
        dbData.push(userNotes);

        dbData.forEach((note, index) => {
            let number = 1;
            note.id = number;
            number++;
            
            return dbData;
        });
        console.log(dbData);

        dbString = JSON.stringify(dbData);

        fs.writeFile('./db/db.json', dbString, (err, data) => {
            if (err) throw err;
        });
    });
  })

  // Attempt API DELETE REQUEST 
  app.delete('/api/notes/:id', function (req, res) {
    const deleteNoteId = req.params.id;

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;

        dbData = JSON.parse(data);

        for (let i = 0; i < dbData.length; i++) {
            if (dbData[i].id === Number(deleteNoteId)) {
                dbData.splice([i], 1);
            }
        }

        dbString = JSON.stringify(dbData);

        fs.writeFile('./db/db.json', dbString, (err, data) => {
            if (err) throw err;
        });
    });
    res.status(204).send();
  });
};
