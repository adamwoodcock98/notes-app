const NotesView = require("./notesView.js");
const NotesModel = require("./notesModel.js");

const model = new NotesModel();
const view = new NotesView(model);

view.displayNotes();

console.log(model.getNotes());
