import { PAGE_TO_LOAD } from '../constants'

const pageInfo = {
  query: { slug: '' },
  path: '',
}

export const mapPag = pageInfo => ({
  type: PAGE_TO_LOAD,
  payload: pageInfo,
})
