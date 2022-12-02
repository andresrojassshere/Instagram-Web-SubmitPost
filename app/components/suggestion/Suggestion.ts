enum SuggestionAttributes {

    suggestionusername = 'suggestionusername',
    suggestionfollowtoo = 'suggestionfollowtoo',
    suggestionuserpic = 'suggestionuserpic',

}

class Suggestion extends HTMLElement {
    suggestionusername = '';
    suggestionfollowtoo = '';
    suggestionuserpic = '';

    static get observedAttributes(): SuggestionAttributes[]{
        return Object.keys(SuggestionAttributes) as SuggestionAttributes[];
    }

    attributeChangedCallback(prop: SuggestionAttributes, _: string, newValue: string): void {
        this[prop] = newValue;
    }

    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
    }

    connectedCallback(): void{
        this.render();
    }

    render(): void {
        if(!this.shadowRoot) return;
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
