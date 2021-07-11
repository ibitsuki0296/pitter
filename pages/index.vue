<template>
  <div class="wrapper">
    <Header />
    <div class="page">
      <h2 id="pick-up" class="page_h2">Pick Up</h2>
      <div class="column_2">
        <div class="column">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/t26piZM4fK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="column">
          オススメ動画の説明など。<br />
          恥をしのんでわたしの動画はりましたが、このまま公開しないでね。よろしくね。
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head(){
    return {
      titleTemplate: null,
      title: 'Pitter-Patter',
      meta: [
        { hid: 'og:url', property: 'og:url', content: `${process.env.baseURL}` },
        { hid: 'og:image', property: 'og:image', content: `${process.env.baseURL}/img/og-img.jpg` },
      ],
    }
  },
}
</script>

<style lang="css" scoped>

</style>
