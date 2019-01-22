<template>
  <div>
    Complete
    <a class="button is-large is-fullwidth" v-on:click="next">
      Done
    </a>
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
