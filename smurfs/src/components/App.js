import React, { useState, useEffect } from "react";
import "./App.css";
import Smurfs from './Smurfs'
import { addSmurf } from '../Store/index'
import { connect } from 'react-redux'



const SmurfForm = props => {
  const [ smurf, setSmurf ] = useState( {
    name: '',
    age: 200,
    height: '5cm'
  } )
console.log('SMURFFORM PROPS:', props)
console.log('SMURFFORM SMURF:', smurf)

  const handleChanges = e => {
    console.log( 'handleChanges:', e.target.name, e.target.value)
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value
    })
  }
  
  const submitSmurf = ( e ) => {
    e.preventDefault()
    console.log( "smurf @submitSmurf:", smurf )
    console.log( "props @submitSmurf:", props )

    props.addSmurf(smurf)
  }
  return ( 
    <form>
    <input 
      type = 'text'
      name = 'name'
      onChange = {
        handleChanges
      }
    /> 
    <button onClick = { submitSmurf }>Add Smurf</button> 
    </form>
  )
}

function App(props) {


    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm addSmurf = { props.addSmurf }/>
        <Smurfs />
      </div>
    );
  }

  const mapStateToProps = state => {
    return {
      smurfs: state.smurfs
    }
  }
  
  export default connect( mapStateToProps, { addSmurf } )( App )
