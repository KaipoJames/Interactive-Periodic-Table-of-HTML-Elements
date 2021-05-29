export class Element {
  constructor(title, tagName, category, description) {
    this.title = title;
    this.tagName = tagName;
    this.category = category;
    this.description = description;
    this.setConstraints();
  }

  setConstraints() {
    let container = "";
    if (this.category === "basic-html") {
      this.color = "#F49F3F";
      container = document.querySelector(".basic-html");
    } else if (this.category === "formatting") {
      this.color = "#FBD54F";
      container = document.querySelector(".formatting");
    } else if (this.category === "forms-and-input") {
      this.color = "#EF6F40";
      container = document.querySelector(".forms-and-input");
    } else if (this.category === "frames") {
      this.color = "#F4B1B5";
      container = document.querySelector(".frames");
    } else if (this.category === "images") {
      this.color = "#64B5F5";
      container = document.querySelector(".images");
    } else if (this.category === "audio-and-video") {
      this.color = "#BBDFFA";
      container = document.querySelector(".audio-and-video");
    } else if (this.category === "links") {
      this.color = "#8394C9";
      container = document.querySelector(".links");
    } else if (this.category === "lists") {
      this.color = "#5BC669";
      container = document.querySelector(".lists");
    } else if (this.category === "tables") {
      this.color = "#A7E4BB";
      container = document.querySelector(".tables");
    } else if (this.category === "styles-and-semantics") {
      this.color = "#D4E387";
      container = document.querySelector(".styles-and-semantics");
    } else if (this.category === "meta-info") {
      this.color = "#BD92F9";
      container = document.querySelector(".meta-info");
    } else if (this.category === "programming") {
      this.color = "#E4D3FC";
      container = document.querySelector(".programming");
    } else {
      this.color = "gray";
    }
    this.parent = container;
  }
}
