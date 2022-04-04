const NotesModel = require('./notesModel.js');

const notes = new NotesModel;
notes.addNote("eggs");

console.log(notes.getNotes());