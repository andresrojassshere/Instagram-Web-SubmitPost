var SuggestionAttributes;
(function (SuggestionAttributes) {
    SuggestionAttributes["suggestionusername"] = "suggestionusername";
    SuggestionAttributes["suggestionfollowtoo"] = "suggestionfollowtoo";
    SuggestionAttributes["suggestionuserpic"] = "suggestionuserpic";
})(SuggestionAttributes || (SuggestionAttributes = {}));
class Suggestion extends HTMLElement {
    constructor() {
        super();
        this.suggestionusername = '';
        this.suggestionfollowtoo = '';
        this.suggestionuserpic = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(SuggestionAttributes);
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
        <link rel="stylesheet" href="/components/suggestion/suggestion.css"/>
    
        <div class="profile_suggestions">
            <div>
                <img src="${this.suggestionuserpic}" class="profile_pic">
            </div>
            <div>
                <p class="username">${this.suggestionusername} </p>
                <p class="followed_by">followed by ${this.suggestionfollowtoo} </p>
            </div>
            <button class="follow_button">follow</button>
        </div>
        `;
    }
}
customElements.define('my-suggestion', Suggestion);
export default Suggestion;
