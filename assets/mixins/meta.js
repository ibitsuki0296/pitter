export default {
  head() {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: `${process.env.baseURL}${this.meta.url}` },
        { hid: 'og:image', property: 'og:image', content: `${process.env.baseURL}${this.meta.image}` },
      ],
    }
  }
}
