const NotesModel = require('./notesModel.js');

describe(NotesModel, () => {

  describe('Get notes', () => {
    const notes = new NotesModel;

    it('getNotes should return an empty array', () => {
      expect(notes.getNotes()).toEqual([]);
    });

    it('should return the added notes', () => {
      const anInterestingNote = "abcdefU";
      notes.addNote(anInterestingNote);
      expect(notes.getNotes()).toEqual([anInterestingNote]);
    });

  })

  describe('Add note', () => {

    it('should respond to add note', () => {
      const notes = new NotesModel;
      expect(() => {
        notes.addNote()
      }).not.toThrow()
    });

  })

  describe('Set note', () => {

    it('should update notes from the backend server', () => {
      const notes = new NotesModel;
      let someNotes = ['egg', 'eggy', 'eggalishiuous'];

      notes.setNotes(someNotes);
      expect(notes.getNotes()).toEqual(someNotes);
    })

  })

})