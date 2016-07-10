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
