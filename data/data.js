import { Element } from "./element.js";

// Global Variables
const table = document.querySelector(".table");
const input = document.querySelector("#file");
let count = 1;
const elementObjects = [];

export const dataReader = {
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
        startingUI.init(elementObjects);
      };

      reader.onerror = (e) => alert(e.target.error);

      reader.readAsText(file);
    });
  },
};

const startingUI = {
  init(objects) {
    this.drawBoxes(objects);
    this.drawLegend(objects);
  },

  // Helper Method to create an html element and assign textContent to it
  createElement(element, content) {
    const el = document.createElement(element);
    if (content != null) {
      el.innerText = content;
    }
    return el;
  },

  drawLegend(objects) {
    const legend = document.querySelector(".legend");
    // One liner to find the unique set of values of a specific object property
    const categories = [...new Set(objects.map((o) => o.category))];
    const colors = [...new Set(objects.map((o) => o.color))];
    console.log(categories);

    for (let i = 0; i < categories.length; i++) {
      let l_Child = document.createElement("div");
      l_Child.classList = "legend-child" + " legend-child" + (i + 1);

      l_Child.style.gridArea = "child" + (i + 1);

      let l_ChildBox = document.createElement("div");
      l_ChildBox.style.background = colors[i];

      let l_ChildLabel = this.createElement("span", categories[i]);

      l_Child.appendChild(l_ChildBox);
      l_Child.appendChild(l_ChildLabel);
      legend.appendChild(l_Child);
    }
  },

  drawBoxes(objects) {
    for (let i = 0; i < objects.length; i++) {
      this.drawBox(objects[i]);
    }
  },
  drawBox(object) {
    // box : The P-HTML Element outer Box
    // boxTitle : The Title of the P-HTML Element
    // boxTagName : The HTML tag of the P-HTML Element
    // boxID : The ID of the current P-HTML Element

    const box = this.createElement("div");
    box.classList = "box" + " box" + count;
    box.style.background = object.color;

    // Assign each box a grid-area name to use in styling it on the grid
    box.style.gridArea = "box" + count;

    const boxTitle = this.createElement("h1", object.title);
    boxTitle.style.fontSize = "18px";

    const boxTagName = this.createElement("span", object.tagName);
    boxTagName.style.fontSize = "12px";

    const boxID = this.createElement("span", count);
    boxID.className = "box-id";
    count++;

    box.appendChild(boxTitle);
    box.appendChild(boxTagName);
    box.appendChild(boxID);

    //console.log(object.parent);
    //object.parent.appendChild(box);
    table.appendChild(box);
  },
};
