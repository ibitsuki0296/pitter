<template>
  <footer>
      <ul class="list_sns">
        <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
        <li><a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a></li>
        <li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li>
      </ul>
    <small>copyright &copy; 2021 Pitter-patter</small>
  </footer>
</template>

<script>
export default {
}
</script>

<style scoped>
  footer {
    background: rgba(255,255,255,0.6) no-repeat url("~/assets/img/hydrangea.png") left center / auto 120px;
    height: 180px;
    padding: 1rem 0 3rem;
    position: fixed;
    bottom: 0;
    width: 1072px;
    border-top: 1px dashed rgba(29, 81, 163, 0.6);
  }
  .list_sns {
    list-style: none;
    display: flex;
    padding: 0;
    justify-content: flex-end;
  }
  .list_sns li {
    margin: 1rem 0.5rem;
    font-size: 1.4rem;
  }
  small {
    font-size: 0.9rem;
    font-family: 'Source Code Pro', monospace;
  }

  @media screen and (max-width: 1072px) {
    footer {
      background-blend-mode: lighten; 
      padding: 0;
      width: 100%;
    }
    .list_sns {
      justify-content: center;
    }
  }
</style>
