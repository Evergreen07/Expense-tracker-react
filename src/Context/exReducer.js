import {
  add,clr
} from './types'

const exReducer = (state,action) => {
    switch (action.type) {        
        case add :
            return {
                ...state,
                transactions_ : [action.payload,...state.transactions_]
            }

        case clr :
            return {
                ...state,
                transactions_ : state.transactions_.filter(i => i.id_ !== action.payload)
            }
        
        default:
            return state;
    }
}

export default exReducer;