// Create Gallery Of All Elements.
// The Gallery will be hidden until the user clicks on any element.
// The selected element brings up the gallery on the clicked element.
// The user can move right or left to cycle through neighboring elements.

// This will make it easier for the user to access neighboring elements.
// This will make the overall application more interactive and interesting.
// This will improve efficiency for those who use this resource as a learning guide.

import { StartingUI } from "./Interface.js";
import { Handler } from "./Handler.js";

let count = 0;

export class Gallery {
  constructor(objects) {
    this.objects = objects;
    this.galleryChildren = [];
  }
  getGallery() {
    return this.galleryChildren;
  }
  create(objects) {
    for (let i = 0; i < objects.length; i++) {
      const galleryChild = this.createGalleryElement(objects[i]);
      this.galleryChildren.push(galleryChild);
    }
  }
  createGalleryElement(object) {
    const body = document.body;
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
    return newElement;
  }
}
