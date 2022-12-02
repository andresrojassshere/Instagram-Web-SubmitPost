enum HistoriesAttributes {
    username = 'username',
    userpic = 'userpic',
}

class Histories extends HTMLElement {
    
    username = '';
    userpic = '';


    static get observedAttributes(): HistoriesAttributes[]{
        return Object.keys(HistoriesAttributes) as HistoriesAttributes[];
    }

    attributeChangedCallback(prop: HistoriesAttributes, _: string, newValue: string): void {
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
