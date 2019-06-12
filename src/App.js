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

  //updates to make
  //keeps result to a specific length
  //doesn't allow users to click more than one operator in a row
  //clears screen after an operator
  //make the % key work
  //if a number is negative when pressing the "+/-" turn it positive
  //always make +/- go to front of number

  onClick = button => {
    if (this.state.result === "ERROR") {
      this.setState({
       result: button
      })
    }else if(button === "AC"){
      this.clearResult()
    }else if(this.state.result.length > 5){
      this.setState({
        result: 'MAX'
      })
    }else if(button === "="){
      this.equalButtonPressed()
    }else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  equalButtonPressed(){
    try {
      this.setState({
        result: (eval(this.state.result))
      })
    } catch {
      this.setState({
        result: 'ERROR'
      })
    }
  }

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
