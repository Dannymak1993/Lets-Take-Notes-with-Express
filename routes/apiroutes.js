const router = require('express').Router();
const path = require('path');
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require ('fs');

router.get('/notes', (req, res) => {
    const savedNotes = db;
    res.json(savedNotes);
});

router.post('/notes', (req, res) => {
    const savedNotes = db;
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    };
    console.log(newNote);
    savedNotes.push(newNote);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(savedNotes));
    res.json(savedNotes);
});

router.delete('/notes/:id', (req, res) => {
    const noteID = req.params.id;
    console.log(noteID);
    const savedNotes = db;
    for (let i=0; i<savedNotes.length; i++) {
       if (noteID===savedNotes[i].id){
        savedNotes.splice(i, 1)
       }
    }
    console.log(savedNotes);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(savedNotes));
    res.json(savedNotes);
});

module.exports = router;