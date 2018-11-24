<template>
  <div>
    <weather-icon />
    <temperature />
    <unit />
    <forcast />
  </div>
</template>

<script>
import WeatherIcon from './WeatherIcon'
import Temperature from './Temperature'
import Unit from './Unit'
import Forcast from './Forcast'

export default {
  name: 'Weather',
  components: {
    WeatherIcon,
    Temperature,
    Unit,
    Forcast
  }
}
</script>

<style lang="scss">

</style>
