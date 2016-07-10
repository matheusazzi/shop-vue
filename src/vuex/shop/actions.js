import api from 'src/api/fixtures'

export const getProfile = ({ dispatch }) => {
  api.getProfile(profile => {
    dispatch('RECEIVE_PROFILE', profile)
  })
}

export const getProducts = ({ dispatch }) => {
  api.getProducts(products => {
    dispatch('RECEIVE_PRODUCTS', products)
  })
}

export const addToCart = ({ dispatch }, product) => {
  if (product.inventory > 0) {
    dispatch('ADD_TO_CART', product.id)
  }
}

export const removeFromCart = ({ dispatch }, item, index) => {
  dispatch('REMOVE_FROM_CART', item, index)
}
