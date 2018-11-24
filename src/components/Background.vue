<template>
  <div class="background">
    <img :src="url">
  </div>
</template>

<script>
export default {
  name: 'Background',
  data: () => ({
    url: 'https://images.unsplash.com/photo-1541753231552-fa0b6f0c4d7c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2887fd5cf1d3eae72545fe3d8cdd5a04&auto=format&fit=crop&w=1650&q=80'
  })
}
</script>

<style lang="scss">
.background {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
