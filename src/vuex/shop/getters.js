export const cartProducts = state => {
  return state.shoppingCart.added.map(({ id, quantity }) => {
    const product =
      state
        .products.all
        .find(product => product.id === id)

    return {
      id: product.id,
      title: product.title,
      price: product.price,
      shipping: product.shipping,
      quantity
    }
  })
}
