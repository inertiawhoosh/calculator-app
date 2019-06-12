import React from 'react';
import Keypad from './Components/Keypad'
import Result from './Components/Result'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {
    if(button == "AC"){
      this.clearResult()
    } else {
      this.setState({
        result: this.state.result + button
      })
    }
  }
  //need functions for: 
  //equalButtonPressed
  //toClearResult
  clearResult() {
    this.setState({
      result: ""
    })
  }
  render(){
    return (
      <div className='calculator-wrapper'>
        <Result result={this.state.result} />
        <Keypad onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
