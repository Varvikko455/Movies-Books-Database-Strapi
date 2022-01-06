const CategoryInfo = (state = {}, action) => {
  switch (action.type) {
    case 'CATEGORYINFO':
      return action.value
    default:
      return state
  }
}

export { CategoryInfo };