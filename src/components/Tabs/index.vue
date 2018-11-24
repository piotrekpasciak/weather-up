<template>
  <nav>
    <tab />
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
  }
}
</script>

<style lang="scss">

</style>
