import axios from 'axios'

export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const ADD_SMURF = 'ADD_SMURF'

export const getSmurf = () => ( dispatch ) => {

  dispatch( { type: GET_SMURFS_SUCCESS } )
 
  axios
    .get( `http://localhost:3333/smurfs` )
    .then( res => {
      console.log( 'Smurfs res.data:', res.data )
      dispatch( { type: GET_SMURFS_SUCCESS, payload: res.data } ) 
    } )
    .catch(  err => console.log( 'Smurfs error:', err ) )
}

export const addSmurf = ( smurf ) => ( dispatch ) => {
  axios
  .post( `http://localhost:3333/smurfs`, smurf )
  .then( res => {
    console.log( 'Smurfs res.data:', res.data )
    dispatch( { type: ADD_SMURF, payload: smurf } )
  } )
  .catch(  err => console.log( 'Smurfs error:', err ) )
}