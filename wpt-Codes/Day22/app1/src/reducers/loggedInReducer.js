const loggedInReducer = (state = false, action) => {
  switch (action.type) {
    case 'signed_in':
      return true
    case 'signed_out':
      return false
    default:
      return state
  }
}

export default loggedInReducer
