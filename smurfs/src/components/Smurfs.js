import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getSmurf } from '../Store/index'

import Smurf from './Smurf'


const Smurfs = props => {
  
  useEffect( () => {
    props.getSmurf()
    console.log( 'Props:', props)

  }, [] )

  return (
    <div className = 'Smurfs'>
    { props.smurfs && props.smurfs.map( smurf => {
        return(
          <div>
            <p>{ smurf.name }</p>
            <p>{ smurf.age }</p>
            <p>{ smurf.height }</p>
          </div>
        )
      })}
    </div>
  )
}


const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect( mapStateToProps, { getSmurf } )( Smurfs )



  // const addSmurf = smurf => {
  //   setSmurfs( () => [ ...smurfs, smurf ] )
  // }
  
    // const ListSmurfs = props => {
    //   return ( 
    //     <div> 
    //       { props.smurfs.map( smurf => {
    //         <p>{ props.smurf }</p>
    //       })
    //     } 
    //     </div>
    //   )
    // }
  
  