<template>
  <div class="wrapper" id="top">
    <Header />
    <div class="page">
      <h2 id="pick-up" class="page_h2">Pick Up</h2>
      <div class="column_2">
        <div class="column">
          <div class="youtube">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/t26piZM4fK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div class="column">
          <p>
            オススメ動画の説明など。<br />
            恥をしのんでわたしの動画はりましたが、このまま公開しないでね。よろしくね。
          </p>
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
        それぞれ「About」や「Works」の見出しはh2、「このサイトについて」などはh3です。<br />
        さらに「テーブル」はh4を用意しましたが、h4ってあまり使わない気もしている……。
      </p>
      <p>
        TOPに戻るリンクの下にある水平線は区切りとしてhrを入れました。<br />
        飾り線なので取っ払っても特に支障はないです。
      </p>
      <h4 class="page_h4">テーブル</h4>
      <p>
        thのみ下線が青くなります。
      </p>
      <table>
        <tr>
          <th>name</th>
          <td>神立 あまね</td>
        </tr>
        <tr>
          <th>likes</th>
          <td>辛いもの</td>
        </tr>
        <tr>
          <th>dislikes</th>
          <td>協調性を要求するもの</td>
        </tr>
      </table>
    </div>
    <button class="anchor_button">
      <NuxtLink to="/" v-scroll-to="'#top'" class="anchor_top">▲Top</NuxtLink>
    </button>
    <hr />

    <div id="works" class="page">
      <h2 class="page_h2">Works</h2>
      <p>作品。</p>
      <div class="column_2">
        <div class="column">
          <img src="~/assets/img/500_750.png" alt="500*750" />
        </div>
        <div class="column">
          <p>
            画像はこんなかんじで。<br />
            実際にはYouTube埋め込むことが多いのではないかと思うけれど。
          </p>
        </div>
      </div>
    </div>
    <button class="anchor_button">
      <NuxtLink to="/" v-scroll-to="'#top'" class="anchor_top">▲Top</NuxtLink>
    </button>
    <hr />

    <div id="link" class="page">
      <h2 class="page_h2">Link</h2>
      <h3 class="page_h3">リンクについて</h3>
      <p>テーブルはAboutと同じものです。</p>
      <table>
        <tr>
          <th>サイト名</th>
          <td>Pitter-Patter</td>
        </tr>
        <tr>
          <th>URL</th>
          <td>https://xxxx.jp/</td>
        </tr>
      </table>
      <h3 class="page_h3">ジャンルとか</h3>
      <p>
        <a href="#">サイト名</a> ／ <a href="#">サイト名</a>
      </p>
      <h3 class="page_h3">ジャンルとか</h3>
      <p>
        <a href="#">サイト名</a> ／ <a href="#">サイト名</a>
      </p>
    </div>
    <button class="anchor_button">
      <NuxtLink to="/" v-scroll-to="'#top'" class="anchor_top">▲Top</NuxtLink>
    </button>
    <hr />

    <div id="mail" class="page">
      <h2 class="page_h2">Mail</h2>
      <p>ご連絡先：xxx[at]xxx.jp</p>
      <p>[at]はアットマークに変えてください。</p>
      <p>返信が必要なもので、1週間以内に返信がない場合は再度お問い合わせください。</p>
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
