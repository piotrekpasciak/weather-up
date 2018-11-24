<template>
  <div>
    <h1>City to check</h1>
  </div>
</template>

<script>
export default {
  name: 'AddTab',
  methods: {
    addTab () {
      this.$store.dispatch('addNewTab', { name: 'Dupa' })
    }
  }
}
</script>

<style lang="scss">

</style>
