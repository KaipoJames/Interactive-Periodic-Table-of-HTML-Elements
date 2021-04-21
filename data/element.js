export class Element {
  constructor(title, tagName, category, color, description) {
    this.title = title;
    this.tagName = tagName;
    this.category = category;
    this.color = color;
    this.description = description;
    this.setColor();
  }

  setColor() {
    if (this.category === "basic-html") {
      this.color = "#F49F3F";
    } else if (this.category === "formatting") {
      this.color = "#FBD54F";
    } else if (this.category === "forms-and-input") {
      this.color = "#EF6F40";
    } else if (this.category === "frames") {
      this.color = "#F4B1B5";
    } else if (this.category === "images") {
      this.color = "#64B5F5";
    } else if (this.category === "audio/video") {
      this.color = "#BBDFFA";
    } else if (this.category === "links") {
      this.color = "#8394C9";
    } else if (this.category === "lists") {
      this.color = "#5BC669";
    } else if (this.category === "tables") {
      this.color = "#A7E4BB";
    } else if (this.category === "styles-and-semantics") {
      this.color = "#D4E387";
    } else if (this.category === "meta-info") {
      this.color = "#BD92F9";
    } else if (this.category === "programming") {
      this.color = "#E4D3FC";
    } else {
      this.color = "gray";
    }
  }
}
