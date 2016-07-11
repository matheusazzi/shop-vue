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

export const getPromotions = ({ dispatch }) => {
  api.getPromotions(promotions => {
    dispatch('RECEIVE_PROMOTIONS', promotions)
  })
}

export const addToCart = ({ dispatch }, product) => {
  if (product.inventory > 0) {
    dispatch('ADD_TO_CART', product.id)
  }
}

export const removeFromCart = ({ dispatch }, product) => {
  dispatch('REMOVE_FROM_CART', product)
}

export const toggleCoupon = ({ dispatch }, coupon) => {
  dispatch('TOGGLE_COUPON', coupon)
}
