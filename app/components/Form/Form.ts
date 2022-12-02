import DB from "../../services/db.js";
import { Post } from "../../types/types.js";

class Form extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.mount();
  }

  mount() {
    this.render();
    this.addListeners();
  }

  addListeners() {
    const form = this.shadowRoot?.querySelector("form");
    form?.addEventListener("submit", (e: SubmitEvent) => {
      e.preventDefault();
      const target = e.target as HTMLFormElement;

      const inputTitle = target.elements[0] as HTMLInputElement;
      const inputImg = target.elements[1] as HTMLInputElement;
      const inputBody = target.elements[2] as HTMLInputElement;
      

      const newPost: Post = { title: inputTitle.value, img: inputImg.value, body: inputBody.value };
      DB.addPost(newPost);
    });
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./components/Form/form.css" type="text/css" >
      <article>
        <section>
          <div class="container">
            <p class="title">New Post</p>
            <div class="sub-container">
            <div> 
              <form>
              <div>
                <input name="titulo"/ placeholder="   Write a caption..." class="caption">
              </div>
              <div class="image-info">
                <img src="images/form/image.png"  class="icons">
                <p class="subtitle"> Add image: </p>
                <input name="Imagen" / placeholder="   Copy link here..." class="image"></input>
              </div>
              <div class="location-info">
                <img src="images/form/location.png"  class="icons">
                <p class="subtitle"> Add location: </p>
                <input name="descripcion" / placeholder="   Write here..." class="location">
              </div>
              <div class="share-container">
                <button type="submit" class="share">Share</button>
              </div>
            </div>
          </div>
        </section>
      </article>
      `;
    }
  }
}

customElements.define("app-form", Form);
