class BaseElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open'})
    this.createTemplate()
    this.render();
  }

  render() {
    this.shadowRoot.appendChild(this.domTemplate.content.cloneNode(true));
  }

  createTemplate() {
    this.domTemplate = document.createElement('template');
    this.domTemplate.innerHTML = this.template;
  }

  get template() {
    console.error("template needs to be implemented in child class")
  }

  connectedCallback() {
  }

  disconnectedCallback() {
  }
}