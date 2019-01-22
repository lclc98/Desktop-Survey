<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-two-thirds">
      <h1 class="title has-text-centered">Complete</h1>
      <a class="button is-large is-fullwidth" v-on:click="next">
        Done
      </a>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
  export default {
    name: 'complete',
    created: function () {
    },
    methods: {
      next: function () {
        this.$router.push('/')
      }
    }
  }
</script>
