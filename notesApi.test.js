const NotesAPI = require('./notesApi');

require('jest-fetch-mock').enableMocks();

describe('Notes API class', () => {

  it('calls fetch and loads notes', async () => {
    const api = new NotesAPI();
    fetch.mockResponseOnce(JSON.stringify({
      0: 'This note is coming from the server'
    }));

    api.loadNotes((notes) => {
      expect(notes[0]).toBe('This note is coming from the server')
    });
  });

});