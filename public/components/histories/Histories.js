var HistoriesAttributes;
(function (HistoriesAttributes) {
    HistoriesAttributes["username"] = "username";
    HistoriesAttributes["userpic"] = "userpic";
})(HistoriesAttributes || (HistoriesAttributes = {}));
class Histories extends HTMLElement {
    constructor() {
        super();
        this.username = '';
        this.userpic = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(HistoriesAttributes);
    }
    attributeChangedCallback(prop, _, newValue) {
        this[prop] = newValue;
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/components/histories/histories.css"/>
            <div class="histories">
                <div> <img src="${this.userpic}" class="profile_pic"> </div>
                <p class="username">${this.username}</p>
            </div>
        `;
    }
}
customElements.define('my-histories', Histories);
export default Histories;
