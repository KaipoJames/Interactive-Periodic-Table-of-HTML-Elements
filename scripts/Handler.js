import { StartingUI } from "./Interface.js";

export const Handler = {
  addListeners(objects) {
    const boxes = document.querySelectorAll(".box");
    const body = document.body;
    let clickCount = 0;
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener(
        "click",
        () => {
          clickCount++;
          if (clickCount === 1) {
            setTimeout(() => {
              clickCount = 0;
              this.displayNewElement(body, objects[i], i);
            }, 400);
          } else if (clickCount === 2) {
            clickCount = 0;
            console.log("You clicked on " + boxes[i].classList[1]);
          }
        },
        false
      );
    }
  },
  displayNewElement(body, object, count) {
    const table = document.querySelector(".table");
    table.style.opacity = 0.3;

    const newElement = document.createElement("div");
    newElement.classList = "newBox" + " newBox" + (count + 1);
    newElement.style.background = object.color;
    newElement.style.marginBottom = "6rem";

    const title = StartingUI.createElement("h1", object.title);
    const tagName = StartingUI.createElement("span", object.tagName);
    const description = StartingUI.createElement("p", object.description);
    const deleteBtn = document.createElement("img");

    title.style.fontSize = "5rem";
    tagName.style.fontSize = "3rem";
    description.style.fontSize = "1.5rem";
    description.style.width = "75%";
    description.style.textAlign = "center";

    deleteBtn.src = "../images/delete.png";
    deleteBtn.style.width = "25px";
    deleteBtn.style.height = "25px";
    deleteBtn.style.cursor = "pointer";

    deleteBtn.addEventListener("mouseenter", () => {
      deleteBtn.style.height = "28px";
      deleteBtn.style.width = "28px";
    });
    deleteBtn.addEventListener("mouseleave", () => {
      deleteBtn.style.height = "25px";
      deleteBtn.style.width = "25px";
    });

    deleteBtn.addEventListener("click", () => {
      table.style.opacity = 1;
      newElement.remove();
    });

    newElement.appendChild(title);
    newElement.appendChild(tagName);
    newElement.appendChild(description);
    newElement.appendChild(deleteBtn);

    body.appendChild(newElement);
  },
  addLegendListeners(legend, objects) {
    let inLegend = false;

    legend.addEventListener("mouseenter", () => {
      inLegend = true;
      console.log("In Legend: " + inLegend);
    });
    legend.addEventListener("mouseleave", () => {
      inLegend = false;
      console.log("In Legend: " + inLegend);
    });
    const legendChildren = document.querySelectorAll(".legend-child");
    const boxes = document.querySelectorAll(".box");
    for (let i = 0; i < legendChildren.length; i++) {
      legendChildren[i].addEventListener("mouseenter", () => {
        if (inLegend === true) {
          legendChildren[i].style.cursor = "pointer";
          const category = legendChildren[i].childNodes[1].innerText;
          const highlightedElements = document.querySelectorAll("." + category);

          for (var box of boxes) {
            box.style.opacity = 0.3;
          }
          for (var el of highlightedElements) {
            el.style.opacity = 1;
          }
        }
      });
      if (inLegend != true) {
        console.log(inLegend);
        legendChildren[i].addEventListener("mouseleave", () => {
          for (var box of boxes) {
            box.style.opacity = 1;
          }
        });
      }
    }
  },
};
