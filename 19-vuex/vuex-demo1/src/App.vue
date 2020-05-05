<template>
  <div id="app">
    {{count}}
    {{$store.getters.doubleIncrement}}
    <button @click="$store.commit('increment')">
      count++
    </button>
    <button @click="$store.dispatch('increment')">
      count++
    </button>
    <button @click="$store.commit('increment2', 2)">
      count+2
    </button>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
}
</script>
