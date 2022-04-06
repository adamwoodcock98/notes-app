class NotesAPI {
  loadNotes(response) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => {
        response(data)
      });
  }

  createNote(note, response) {
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 'content': note }),
    })
    .then(response => response.json())
    .then(data => {
      response(data)
    });
  }
}

module.exports = NotesAPI;