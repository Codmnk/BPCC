import { PAGE_TO_LOAD } from '../constants'

const pageInfo = {
  query: { slug: '' },
  path: 'home',
}

export const mapPag = () => ({
  type: PAGE_TO_LOAD,
  payload: pageInfo,
})
