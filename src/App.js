import React from 'react';
import Keypad from './Components/Keypad'
import Result from './Components/Result'
import './Components/components.css'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {
    if(button === "AC"){
      this.clearResult()
    }else if(button === "="){
      this.equalButtonPressed()
    }else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  //need functions for: 
  //equalButtonPressed
  equalButtonPressed(){
    this.setState({
      result: (eval(this.state.result))
    })
  }
  //toClearResult
  clearResult() {
    this.setState({
      result: ""
    })
  }
  render(){
    return (
      <div className='calculator-wrapper'>
        <div className='calculator'>
          <Result result={this.state.result} />
          <Keypad onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
