import { PAGE_TO_LOAD } from '../constants'

//initial state
// import initialStore from '../stores/initialStore'
const initialStore = {
  pageInfo: {
    query: { slug: '' },
    path: 'home',
  },
}

const pageMapReducer = (state = initialStore, action = {}) => {
  const { type, payload } = action
  switch (type) {
    case PAGE_TO_LOAD:
      return {
        ...state,
        payload,
      }

      break

    default:
      return state
  }
}
export default pageMapReducer
