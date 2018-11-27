<template>
  <div class="background">
    <img
      ref="image"
      class="background__image"
      :class="{
        'background__image--loaded': loaded
      }"
      :src="backgroundImage.x1"
    >
  </div>
</template>

<script>
import srcSet from '@/helpers/srcSet'

export default {
  name: 'Background',
  data: () => ({
    loaded: false
  }),

  beforeMount () {
    this.$store.dispatch('loadImages')
  },

  watch: {
    backgroundImage: {
      immediate: true,
      deep: true,
      handler (newVal, _) { this.setImage(newVal) }
    }
  },

  methods: {
    setImage (val) {
      setTimeout(() => {
        this.$refs.image.crossOrigin = 'anonymous'

        this.$refs.image.onload = () => {
          setTimeout(() => { this.loaded = true }, 200)
        }

        this.$refs.image.src = val.x3
        this.$refs.image.srcset = srcSet(val)
      }, 10)
    }
  },

  computed: {
    backgroundImage () {
      return this.$store.getters.getBackgroundImage
    }
  }
}
</script>

<style lang="scss">
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(20px);
    transform: scale(1.4);
    transition: ease-in-out .4s;

    &--loaded {
      filter: blur(0);
      transform: scale(1);
      transition: ease-in .4s;
    }
  }
}
</style>
