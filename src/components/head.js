class SiteHead extends HTMLElement {

  disconnectedCallback() {
    document.head.append(
      add({
        tag: "title",
        innerHTML: this.innerHTML
      }),
      add({
        name: `title`,
        content: `Title site${this.id}`
      }),
      add({
        name: `description`,
        content: this.innerHTML
      })
    );
  }
}