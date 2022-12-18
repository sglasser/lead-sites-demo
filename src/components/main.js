class MainContent extends BaseElement {
  constructor() {
    super();
  }

  get template () {
    return `
      <div>
        <p>Here is the page main content</p>
    `;
  }
}

customElements.define('main-content', MainContent)