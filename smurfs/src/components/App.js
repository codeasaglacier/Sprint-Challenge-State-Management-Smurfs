import React, { Component, createContext } from "react";
import "./App.css";

const SmurfContext = createContext()

class App extends Component {

  constructor() {
    super()
    this.state = {
      smurfs,
      smurf: ''
    }
  }

  addSmurf = ( e, name ) => {
    e.preventDefault()
    const newSmurf = {
      name: name,
      age: 200,
      height: '5cm'
    }

    this.setState( {
      smurfs: [ ...this.state.smurfs, newSmurf ]
    } )
  }

  handleChanges = e => {
    this.setState( {
      [ e.target.name ]: e.target.value
    } )
  }

  submitSmurf = e => {
    e.preventDefault()
    this.props.addSmurf( e, this.state.name )
  }

  ListSmurfs = props => {
    return (
      <div>
        { props.smurfs.map( smurf => {
          <p>{ props.smurf }</p>
        })}
      </div>
    )
  }

  SmurfForm = () => {
    return (
      <form
        onSubmit = { this.submitSmurf }
      >
        <input
          type = 'text'
          name = 'name'
          onChange = { this.handleChanges }
        />
        <button>Add Smurf</button>
      </form>
    )
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <ListSmurfs
          name = { this.state.smurf.name }
        />
        <SmurfForm
          addSmurf = { this.addSmurf }
        />
      </div>

   
    );
  }
}

export default App;
