
class PageHeader extends BaseElement {
  constructor() {
    super();
    // this.logoUrl = this.getAttribute('logoUrl') || "https://via.placeholder.com/50"
    // this.menuItems = {Home: '/', Blog: '/blog', About: '/about'}
  }

  get template() {
    return `
      <h3>
        <slot name="title"></slot>
      </h3>
    `;
  }
}


customElements.define('page-header', PageHeader)





