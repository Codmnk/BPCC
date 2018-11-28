import { PAGE_TO_LOAD, IS_LOGED_IN, CUSTOMER_INFO } from '../constants'

const pageInfo = {
  query: { slug: '' },
  path: '',
}

export const mapPag = pageInfo => ({
  type: PAGE_TO_LOAD,
  payload: pageInfo,
})

export const getCustomer = customer => ({
  type: IS_LOGED_IN,
  customer,
})

export const customerInfo = customer => ({
  type: CUSTOMER_INFO,
  customer,
})
