<template>
  <header>
    <h1 class="site-title">Pitter-Patter</h1>
    <nav>
      <ul>
        <li><a href="/">Top</a></li>
        <li><NuxtLink to="/#about" v-scroll-to="'#about'">About</NuxtLink></li>
        <li><NuxtLink to="/#works" v-scroll-to="'#works'">Works</NuxtLink></li>
        <li><NuxtLink to="/#link" v-scroll-to="'#link'">Link</NuxtLink></li>
        <li><NuxtLink to="/#mail" v-scroll-to="'#mail'">Mail</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped>
  header {
    background: rgba(255, 255, 255, 0.6) no-repeat url("~/assets/img/umbrella.png") right top / auto 100px;
    padding: 0 2rem 0 0;
    width: 1072px;
    height: 130px;
    position: fixed;
    z-index: 5;
    border-bottom: 1px dashed rgba(29, 81, 163, 0.6);
  }
  .site-title {
    font-family: 'Source Code Pro', monospace;
    font-weight: 300;
    font-size: 2rem;
  }
  nav ul {
    list-style: none;
    display: flex;
    padding: 0;
  }
  nav ul li {
    margin: 0 0.5rem;
    font-family: 'Source Code Pro', monospace;
    font-size: 1.1rem;
  }

  @media screen and (max-width: 1072px) {
    header {
      background: rgba(255, 255, 255, 0.5);
      width: 100%;
    }
  }
</style>
