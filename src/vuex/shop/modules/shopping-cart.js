const state = {
  added: [],
  freeShipping: false
}

const mutations = {
  ADD_TO_CART (state, productId) {
    const record = state.added.find(product => product.id === productId)

    if (!record) {
      state.added.push({
        id: productId,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },

  REMOVE_FROM_CART (state, item) {
    const index = state.added.findIndex(added => added.id === item.id)
    state.added.splice(index, 1)
  },

  TOGGLE_COUPON (state, coupon) {
    if (coupon.id === 3) {
      state.freeShipping = !state.freeShipping
    }
  }
}

export default {
  state,
  mutations
}
