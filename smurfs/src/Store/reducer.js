import {
  GET_SMURFS_SUCCESS,
  ADD_SMURF
} from './index'

const initialState = {
  smurfs: []
}

const reducer = ( state = initialState, action ) => {
  switch( action.type ) {

    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      }

    case ADD_SMURF:
      return {
        ...state,
        smurfs: [ ...state.smurfs, action.payload ]
      }

    default:
      return state
  }
}

export default reducer