<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Calendar />
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from '@/Calendar.vue'

export default {
  name: 'home',
  components: {
    Calendar
  }
}
</script>
