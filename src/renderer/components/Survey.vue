<template>
  <div id="app">
    <div v-if="complete">
      Done
    </div>
    <div v-else-if="survey.length > 0">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-two-thirds">
          <div v-bind:key="index" v-for="(s, index) in survey" v-show="index === qIndex">
            <h1 class="title has-text-centered">{{ s.question }}</h1>
            <div class="field has-text-centered" v-for="(answer, aIndex) in s.responses">
              <a class="button" v-bind:class="[answers[qIndex] === aIndex ? 'is-success' :'']" v-on:click="selected(aIndex)">{{answer}}</a>
            </div>
          </div>
          <br>
          <div class="has-text-centered" v-if="qIndex < survey.length">
            <a class="button is-large is-fullwidth" v-on:click="next" :disabled="isDisabled">
              Next
            </a>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </div>
    <div v-else>
      <h1 class="title">Please include a data.csv to show questions</h1>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'survey',

  data: function () {
    return {
      qIndex: 0,
      survey: [],
      answers: [],
      complete: false
    }
  },
  created: function () {
    const self = this
    let counter = 0
    const lineReader = require('readline').createInterface({
      input: require('fs').createReadStream('./data.csv')
    })

    lineReader.on('line', function (line) {
      const data = line.split(',')

      const responses = data.splice(1)
      self.survey.push({question: data[0], responses})
      counter++
    })
    lineReader.on('close', function () {
      self.answers = Array(counter).fill(-1)
    })
  },
  methods: {
    selected: function (e) {
      Vue.set(this.answers, this.qIndex, e)
    },
    next: function () {
      if (this.answers[this.qIndex] === -1) { return }

      if (this.qIndex + 1 >= this.answers.length) {
        this.complete = true
      }
      this.qIndex++
    }
  },
  computed: {
    isDisabled: function () {
      return this.answers[this.qIndex] === -1
    }
  }
}
</script>
