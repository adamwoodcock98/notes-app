/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("./notesView.js");
const NotesModel = require("./notesModel.js");
const NotesAPI = require('./notesApi.js');

require('jest-fetch-mock').enableMocks();

let model;
let view;
let api;

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync("./index.html");
  model = new NotesModel();
  api = new NotesAPI;
  view = new NotesView(model, api);
});

describe("NotesView", () => {

  it("a note should appear once the add note button is pressed", async () => {
    fetch.mockResponse(JSON.stringify(
      ["eGgS"]
    ));
    document.querySelector("#note-input").value = "eGgS";
    const submitButtonEl = document.querySelector("#note-submit-btn");
    await Promise.resolve(submitButtonEl.click());   
    setTimeout(() => {
      expect(document.querySelector(".note :nth-last-child(1)").innerText).toEqual("eGgS");
    }, 1000)
  });

  it("should display all notes", async () => {
    document.querySelector("#note-input").value = "eGgS";
    const submitButtonEl = document.querySelector("#note-submit-btn");
    await Promise.resolve(submitButtonEl.click());   
    setTimeout(() => {
      expect(document.querySelectorAll(".note").length).toEqual(2);
    }, 1000)
  });

});
