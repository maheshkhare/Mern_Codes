export const addToCart = (product = {}) => {
  return {
    type: 'add-to-cart',
    payload: product,
  }
}

export const removeFromCart = (product = {}) => {
  return {
    type: 'remove-from-cart',
    payload: product,
  }
}
