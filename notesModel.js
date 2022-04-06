class NotesModel {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  setNotes(notes) {
    notes.forEach(note => {
      this.notes.push(note);
    })
  }

  reset() {
    this.notes = [];
  }

  addNote(note) {
    this.notes.push(note);
  }
}

module.exports = NotesModel;
