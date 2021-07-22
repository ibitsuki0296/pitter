<template>
  <div class="wrapper" id="top">
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
      <h3 class="page_h3">ひとこと</h3>
      <p>
        コメントか何か入れても良いかもしれない。<br />
        改行はこんなかんじで、
      </p>
      <p>
        段落はこんなかんじになります。
      </p>
      <p>
        どうぞよしなに。
      </p>
    </div>
    <button class="anchor_button">
      <NuxtLink to="/" v-scroll-to="'#top'" class="anchor_top">▲Top</NuxtLink>
    </button>
    <hr />
    <div id="about" class="page">
      <h2 class="page_h2">About</h2>
      <h3 class="page_h3">このサイトについて</h3>
      <p>
        サイトについての説明など。<br />
        それぞれ「About」や「Works」の見出しはh2、「このサイトについて」などはh3です。
      </p>
      <p>
        TOPに戻るリンクの下にある水平線は区切りとしてhrを入れました。<br />
        飾り線なので取っ払っても特に支障はないです。
      </p>
    </div>
    <button class="anchor_button">
      <NuxtLink to="/" v-scroll-to="'#top'" class="anchor_top">▲Top</NuxtLink>
    </button>
    <hr />
    <div id="works" class="page">
      <h2 class="page_h2">Works</h2>
      <p></p>
    </div>
    <button class="anchor_button">
      <NuxtLink to="/" v-scroll-to="'#top'" class="anchor_top">▲Top</NuxtLink>
    </button>
    <hr />
    <div id="link" class="page">
      <h2 class="page_h2">Link</h2>
      <p></p>
    </div>
    <button class="anchor_button">
      <NuxtLink to="/" v-scroll-to="'#top'" class="anchor_top">▲Top</NuxtLink>
    </button>
    <hr />
    <div id="mail" class="page">
      <h2 class="page_h2">Mail</h2>
      <p></p>
      <button class="anchor_button">
        <NuxtLink to="/" v-scroll-to="'#top'" class="anchor_top">▲Top</NuxtLink>
      </button>
    </div>
    <Footer />
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
