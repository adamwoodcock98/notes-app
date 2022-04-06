const NotesAPI = require('./notesApi');

require('jest-fetch-mock').enableMocks();

describe('Notes API class', () => {

  it('calls fetch and loads notes', async () => {
    const api = new NotesAPI();
    fetch.mockResponseOnce(JSON.stringify({
      0: 'This note is coming from the server'
    }));

    api.loadNotes((response) => {
      expect(response[0]).toBe('This note is coming from the server')
    });
  });

  it('calls fetch and POSTs a note', () => {
    const api = new NotesAPI();
    fetch.mockResponseOnce(JSON.stringify({
      0: 'Remember to reflect on my progress this week!'
    }));

    api.createNote('Remember to reflect on my progress this week!', (response) => {
      expect(response[0]).toBe('Remember to reflect on my progress this week!')
    });
  });

});