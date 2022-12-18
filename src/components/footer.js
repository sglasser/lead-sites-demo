

class PageFooter extends BaseElement {
  constructor() {
    super();
  }

  get template () {
    return `
      <div id='copyright'></div>
    `;
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#copyright').innerHTML = `Cool Web Designs Copyright ${new Date().getFullYear()}`
  }
}

customElements.define('page-footer', PageFooter)