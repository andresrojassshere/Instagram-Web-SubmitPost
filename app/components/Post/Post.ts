import { Post } from "../../types/types";

class AppPost extends HTMLElement {
  post?: Post;

  static get observedAttributes() {
    return ["post"];
  }

  attributeChangedCallback(_: string, __: string, posts: string) {
    this.post = JSON.parse(posts) as Post;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot && this.post) {
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./components/Post/post.css" type="text/css" >
      <section>
        <div class="post">
          <div class="post_header">
              <div class="user">
                <div class="profile_pic"> <img src="images/post/profile.png" class="icon"> </div>
                  <p class="username">yourusername</p>
                  
                </div>
                <div>
                  <p class="username">${this.post.body}</p>
                  </div>
              <img src="images/post/moreicon.png" class="more_icon">
            </div>
            <img src="${this.post.img}" alt="imagen del post"/ class="image_post">
        </div>
        <div class="post_elements">
                            <div class="icons_organization">
                                    <div class="interaction_icons">
                                    <img src="images/post/likeicon.png" class="icon">
                                    <img src="images/post/commentsicon.png" class="icon">
                                    <img src="images/post/sendicon.png" class="icon">
                                </div>
                                <div> 
                                    <img src="images/post/saveicon.png" class="save_icon">
                                </div>
                            </div> 
                            <p class="likes">Liked by others </p>
                            <p class="description"> <b>yourusername</b> ${this.post.title}</p>
                            <p class="view_comments"> View all comments </p>

                        <div class="comments_container">
                            <img src="images/post/smileicon.png" class="smile_icon">
                            <input type="text" class="comment_box" placeholder="Add a comment">
                            <button class ="comment_button">post</button>
                        </div>
                    </div>
      








        
      </section>`;
    }
  }
}

customElements.define("app-post", AppPost);
