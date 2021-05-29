import { Element } from "./element.js";
import { StartingUI } from "../scripts/Interface.js";
import { Handler } from "../scripts/Handler.js";

// Global Variables
//const table = document.querySelector(".table");
const input = document.querySelector("#file");
const elementObjects = [];

export const DataReader = {
  // Initialize The dataReader Object
  init() {
    this.read();
  },
  // Helper method that returns all of the current Element objects
  getElementObjects(objects) {
    objects.map((obj) => console.log(obj.description));
    return objects;
  },
  // Read in a file containing the data to visualize
  read() {
    input.addEventListener("change", () => {
      let files = input.files;
      if (files.length === 0) return;
      let reader = new FileReader();

      const file = files[0];

      reader.onload = (e) => {
        input.remove();

        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);

        // Create the JavaScript Objects holding the data for each P-HTML Element
        for (const line of lines) {
          const words = line.split(" ");
          const description = words.slice(3, words.length).join(" ");
          const element = new Element(
            words[0],
            words[1],
            words[2],
            description
          );
          elementObjects.push(element);
        }

        // Draw the Table
        StartingUI.init(elementObjects);

        // Add Event Listeners
        Handler.addListeners(elementObjects);
      };

      reader.onerror = (e) => alert(e.target.error);

      reader.readAsText(file);
    });
  },
};
