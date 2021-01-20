import { ADD_PRODUCT } from './actionTypes'


let nextProductId = 0

export const addProducts = product => ({
  type: ADD_PRODUCT,
  payload: {
    id: ++nextProductId,
    product
  }
})