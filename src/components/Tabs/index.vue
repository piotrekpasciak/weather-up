<template>
  <nav>
    <tab v-for="(tab, index) in tabs" :key="index" :tab="tab" />

    <add-tab />
  </nav>
</template>

<script>
import Tab from './Tab.vue'
import AddTab from './AddTab.vue'

export default {
  name: 'Tabs',
  components: {
    Tab,
    AddTab
  },
  computed: {
    tabs() {
      return this.$store.getters.getTabs
    }
  }
}
</script>

<style lang="scss">

</style>
