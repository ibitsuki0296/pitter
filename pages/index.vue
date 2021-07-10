<template>
  <Header />
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
