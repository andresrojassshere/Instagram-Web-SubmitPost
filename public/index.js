import "./components/PostList/PostList.js";
import "./components/Form/Form.js";
import "./components/index.js";
import DB from "./services/db.js";
class App extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    async connectedCallback() {
        DB.listenPosts((posts) => this.render(posts));
    }
    render(posts) {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./components/styles.css"/>

      <my-header username="andresrojassshere"> </my-header>

      <section class="main"> 
      <div class="container">
          <div class="left_column">
          <div class="histories_container">
          <my-histories 
              userpic="./images/histories/sofia-profile.png",
              username="sofiacoppola"
          > </my-histories>
          <my-histories 
              userpic="./images/histories/kirsten_profile.png",
              username="kirstendunst"
          > </my-histories>
          <my-histories 
              userpic="./images/histories/josh_profile.png",
              username="joshhartnett"
          > </my-histories>
          <my-histories 
              userpic="./images/histories/leslie_profile.png",
              username="leslielisbon"
          > </my-histories>
          <my-histories 
              userpic="./images/histories/therese-profile.png",
              username="thereselisbon"
          > </my-histories>
          <my-histories 
              userpic="./images/histories/hannah-profile.png",
              username="hannahhall"
          > </my-histories>
          <my-histories 
              userpic="./images/histories/mary-profile.png",
              username="marylisbon"
          > </my-histories>
          </div>
               
              <div>
                <app-form></app-form> 
              </div>

              <dic>
              <app-post-list posts='${JSON.stringify(posts)}'></app-post-list> 
              </dic>

              
              
          </div>

          <div class="right_column">
              <p class="suggestions">Suggestions For You</p>
              <my-suggestion  
                    suggestionusername = "charlotte" 
                    suggestionfollowtoo="sofiacoppola and 12 others"
                    suggestionuserpic="./images/suggestions/charlotte.png"
                > </my-suggestion>
                <my-suggestion  
                    suggestionusername = "marieantoinette" 
                    suggestionfollowtoo="kirstendunst and 65 others"
                    suggestionuserpic="./images/suggestions/marie.png"
                > </my-suggestion>
                <my-suggestion  
                    suggestionusername = "bobharris" 
                    suggestionfollowtoo="sofiacoppola and 6 others"
                    suggestionuserpic="./images/suggestions/bob.png"
                > </my-suggestion>
                <my-suggestion  
                    suggestionusername = "kinglouisxvi" 
                    suggestionfollowtoo="kirstendunst and 54 others"
                    suggestionuserpic="./images/suggestions/king.png"
                > </my-suggestion>
                <my-suggestion  
                    suggestionusername = "gabrielle" 
                    suggestionfollowtoo="sofiacoppola and 14 others"
                    suggestionuserpic="./images/suggestions/gabrielle.png"
                > </my-suggestion>
          </div>
      </div>
  </section>
      









      
      
      </section>
      `;
        }
    }
}
customElements.define("app-container", App);
