const state = {
  all: []
}

const mutations = {
  RECEIVE_PRODUCTS (state, products) {
    state.all = products
  },

  ADD_TO_CART (state, productId) {
    state.all
      .find(product => product.id === productId)
      .inventory--
  },

  REMOVE_FROM_CART (state, item, index) {
    state.all
      .find(product => product.id === item.id)
      .inventory += item.quantity
  }
}

export default {
  state,
  mutations
}
