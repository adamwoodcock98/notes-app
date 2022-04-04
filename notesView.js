const NotesModel = require("./notesModel");

class NotesView {
  constructor(model = new NotesModel()) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");
  }

  displayNotes() {
    const notes = this.model.getNotes();
    notes.forEach((note) => {
      let div = document.createElement("div");
      div.className = "note";
      let p = document.createElement("p");
      p.innerText = note;
      div.append(p);
      this.mainContainerEl.append(div);
    });
  }
}

module.exports = NotesView;
