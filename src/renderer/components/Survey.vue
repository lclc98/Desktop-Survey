<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column">
      <h1 class="title has-text-centered">Contact Information</h1>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Name" v-model="fullName">
        </div>
      </div>
      <div class="field">
        <label class="label">Phone Number</label>
        <div class="control">
          <input class="input" type="text" placeholder="Phone Number" v-model="phoneNumber">
        </div>
      </div>
      <div class="field">
        <label class="label">Address</label>
        <div class="control">
          <input class="input" type="text" placeholder="Address" v-model="address">
        </div>
      </div>
      <div class="has-text-centered">
        <a class="button is-large is-fullwidth" v-on:click="next" :disabled="isDisabled">
          Next
        </a>
      </div>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
export default {
  name: 'survey',
  data: function () {
    return {
      fullName: '',
      phoneNumber: '',
      address: ''
    }
  },
  beforeOpen () {
    this.fullName = ''
    this.phoneNumber = ''
    this.address = ''
  },
  methods: {
    next: function () {
      if (this.isDisabled) { return }
      this.$store.dispatch('setUserInformation', {fullName: this.fullName, phoneNumber: this.phoneNumber, address: this.address})
      this.$router.push('/questions')
    }
  },
  computed: {
    isDisabled: function () {
      return this.fullName === '' || this.phoneNumber === '' || this.address === ''
    }
  }
}
</script>
