import { ADD_PRODUCT } from '../actionTypes';

const initialState = {
  allIds: [],
  byIds: {}
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const { id, product } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            product,
            sold: false
          }
        }
      }
    }
    default: return state
  }
}

export default productReducer