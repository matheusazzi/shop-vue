const state = {
  all: []
}

const mutations = {
  RECEIVE_PROMOTIONS (state, promotions) {
    state.all = promotions
  },

  TOGGLE_COUPON (state, coupon) {
    coupon.active = !coupon.active
  }
}

export default {
  state,
  mutations
}
