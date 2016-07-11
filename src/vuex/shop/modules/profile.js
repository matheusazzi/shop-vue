const LIMIT_COUPON_ID = 4

const state = {
  data: {}
}

const mutations = {
  RECEIVE_PROFILE (state, profile) {
    state.data = profile
  },

  TOGGLE_COUPON (state, coupon) {
    if (coupon.id !== LIMIT_COUPON_ID) return

    if (!coupon.active) {
      state.data.limit += 100
    } else {
      state.data.limit -= 100
    }
  }
}

export default {
  state,
  mutations
}
