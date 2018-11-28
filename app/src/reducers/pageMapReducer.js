import { PAGE_TO_LOAD } from '../constants'

//initial state
// import initialStore from '../stores/initialStore'
const initialStore = {
  // pageInfo: {
  //   query: { slug: '' },
  //   path: '',
  // },
}

const pageMapReducer = (state = initialStore, action = {}) => {
  const { type, payload } = action
  switch (type) {
    default:
      return state
  }
}
export default pageMapReducer
