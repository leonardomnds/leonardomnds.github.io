class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    fetch('components/templates/header.html')
      .then((response) => response.text())
      .then((html) => this.shadowRoot.innerHTML = html);
  }
}

customElements.define('site-header', HeaderComponent);