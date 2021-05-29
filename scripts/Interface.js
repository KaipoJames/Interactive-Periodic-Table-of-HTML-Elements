import { Handler } from "./Handler.js";

let count = 1;

export const StartingUI = {
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
    const colors = [...new Set(objects.map((o) => o.color))];
    const categories = [...new Set(objects.map((o) => o.category))];

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
    Handler.addLegendListeners(legend, objects);
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
    box.classList = "box" + " box" + count + " " + object.category;
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
    const table = document.querySelector(".table");
    table.appendChild(box);
  },
};
