/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("./notesView.js");
const NotesModel = require("./notesModel.js");

describe("NotesView", () => {
  it("should display all notes", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);
    const eggs = "eggs";
    const moreEggs = "eggstra eggs";

    model.addNote(eggs);
    model.addNote(moreEggs);

    view.displayNotes();

    expect(document.querySelectorAll(".note").length).toEqual(2);
  });
});
