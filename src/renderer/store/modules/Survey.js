const state = {
  survey: {},
  fullName: '',
  phoneNumber: '',
  address: '',
  answers: []
}

const mutations = {
  setInputData (state, info) {
    state.survey = info
  },
  setUserInformation (state, info) {
    state.fullName = info.fullName
    state.phoneNumber = info.phoneNumber
    state.address = info.address
  },
  setAnswers (state, info) {
    state.answers = info
  }
}

const actions = {
  setInputData ({ commit }, info) {
    commit('setInputData', info)
  },
  setUserInformation ({ commit }, info) {
    commit('setUserInformation', info)
  },
  setAnswers ({ commit }, info) {
    commit('setAnswers', info)
  }
}

export default {
  state,
  mutations,
  actions
}
