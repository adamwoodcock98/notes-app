(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        setNotes(notes) {
          notes.forEach((note) => {
            this.notes.push(note);
          });
        }
        reset() {
          this.notes = [];
        }
        addNote(note) {
          this.notes.push(note);
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesAPI2 = class {
        loadNotes(response) {
          fetch("http://localhost:3000/notes").then((response2) => response2.json()).then((data) => {
            response(data);
          });
        }
        createNote(note, response) {
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ "content": note })
          }).then((response2) => response2.json()).then((data) => {
            response(data);
          });
        }
      };
      module.exports = NotesAPI2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesModel2 = require_notesModel();
      var NotesAPI2 = require_notesApi();
      var NotesView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.notesListEl = document.querySelector("#notes-list");
          this.submitButtonEl = document.querySelector("#note-submit-btn");
          this.api = api2;
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
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            let div = document.createElement("div");
            div.className = "note";
            let p = document.createElement("p");
            p.innerText = note;
            div.append(p);
            this.notesListEl.append(div);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesView = require_notesView();
  var NotesModel = require_notesModel();
  var NotesAPI = require_notesApi();
  var api = new NotesAPI();
  var model = new NotesModel();
  var view = new NotesView(model, api);
  view.displayNotes();
  console.log(model.getNotes());
  api.loadNotes((notes) => {
    model.setNotes(notes);
    view.displayNotes();
  });
})();
