const state = {
  data: {}
}

const mutations = {
  RECEIVE_PROFILE (state, profile) {
    state.data = profile
  }
}

export default {
  state,
  mutations
}
