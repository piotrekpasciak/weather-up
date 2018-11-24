<template>
  <div class="home">
    <tabs />
    <background />
    <weather />
  </div>
</template>

<script>
import Tabs from '@/components/Tabs'
import Background from '@/components/Background'
import Weather from '@/components/Weather'

export default {
  name: 'home',
  components: {
    Tabs,
    Background,
    Weather
  }
}
</script>
