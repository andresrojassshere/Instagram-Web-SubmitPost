class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/components/header/header.css"/>
            <nav class="navigation_bar">
                <div class="navigation_container">
                    <img src="images/header/instagramlogo.png" class="logo">
                    <input type="text" class="searchbox" placeholder="search">
                    <div class="navigation_icons">
                        <img src="images/header/homeicon.png" class="icons">
                        <img src="images/header/messageicon.png" class="icons">
                        <img src="images/header/addicon.png" class="icons">
                        <img src="images/header/exploreicon.png" class="icons">
                        <img src="images/header/likeicon.png" class="icons">
                        <img src="images/header/profilepic.png" class="userprofile">
                    </div>
                </div>
            </nav>
        `;
    }
}
customElements.define('my-header', Header);
export default Header;
