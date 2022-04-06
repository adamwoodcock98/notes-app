const NotesModel = require("./notesModel.js");
const NotesAPI = require("./notesApi.js");

class NotesView {
  constructor(model, api) {
    this.model = model;
    this.notesListEl = document.querySelector("#notes-list");
    this.submitButtonEl = document.querySelector("#note-submit-btn");
    this.api = api
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.submitButtonEl.addEventListener("click", () => {
      let inputText = document.querySelector("#note-input");
      this.api.createNote(inputText.value, (notes) => {
        inputText.value = "";
        this.model.reset();
        this.model.setNotes(notes);
        this.displayNotes();
      });
    });
  }

  displayNotes() {
    this.notesListEl.innerHTML = "";
    const notes = this.model.getNotes()
    notes.forEach((note) => {
      let div = document.createElement("div");
      div.className = "note";
      let p = document.createElement("p");
      p.innerText = note;
      div.append(p);
      this.notesListEl.append(div);
    });
  }
}

module.exports = NotesView;
