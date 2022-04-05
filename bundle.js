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
        addNote(note) {
          this.notes.push(note);
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesModel2 = require_notesModel();
      var NotesView2 = class {
        constructor(model2 = new NotesModel2()) {
          this.model = model2;
          this.notesListEl = document.querySelector("#notes-list");
          this.submitButtonEl = document.querySelector("#note-submit-btn");
          this.setupEventListeners();
        }
        setupEventListeners() {
          this.submitButtonEl.addEventListener("click", () => {
            let inputText = document.querySelector("#note-input");
            this.model.addNote(inputText.value);
            inputText.value = "";
            this.displayNotes();
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
  var model = new NotesModel();
  var view = new NotesView(model);
  view.displayNotes();
  console.log(model.getNotes());
})();
