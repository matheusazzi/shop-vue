const state = {
  all: []
}

const mutations = {
  RECEIVE_PROMOTIONS (state, promotions) {
    state.all = promotions
  }
}

export default {
  state,
  mutations
}
