<template>
  <div>
    <button @click="addTab()">
      + add tab
    </button>
  </div>
</template>

<script>
export default {
  name: 'AddTab',
  methods: {
    addTab () {
      console.log('add tab')
    }
  }
}
</script>

<style lang="scss">

</style>
