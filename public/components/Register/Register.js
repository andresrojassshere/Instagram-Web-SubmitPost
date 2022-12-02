import { addUser } from "../../services/db.js";
export class Register extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
        const form = this.shadowRoot?.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            addUser({ email, password }).then(value => {
                if (value) {
                    const event = new CustomEvent("register-success", {});
                    console.log(this);
                    this.dispatchEvent(event);
                }
            });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <section class="Register">
        <link href="./Style.css" rel="stylesheet">
            <img class="InstaLogo" src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png">
            <h4 class="Grey">Register to see photos and vídeos of your friends</h4>
            <button>Log in with Facebook</button>
            <h3 class="Grey">OR</h3>
            <app-form></app-form>
            <p id="Terms" class="Grey">By signing up, you agree to our <b>Terms, Data Policy</b> and <b>Cookies Policy</b></p>
        </section>
        <section class="GoLogin">
            <p>Have an account? <t>Enter</t></p>
        </section>
        <section class="Download">
            <p>Download the app</p>
            <img class="Store" src="https://www.seekpng.com/png/full/22-227594_download-on-the-app-store-badge-available-on.png">
            <img class="Store" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png">
        </section>
        <section>
            <p class="GreySmall">Meta · About · Blog · Jobs · Help · API  Privacy · Terms · Top Accounts · Hashtags · Locations · Instagram  Lite · Contact Uploading & Non-Users · Dance · Food & Drink · Home & Garden · Music · Visual Arts</p>
            <p class="GreySmall">English ˅  ·  © 2022 Instagram from Meta</p>
        </section>
        `;
    }
}
customElements.define("app-register", Register);
