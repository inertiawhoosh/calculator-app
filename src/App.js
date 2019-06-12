import React from 'react';
import Keypad from './Components/Keypad'
import Result from './Components/Result'
import './Components/components.css'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      positive: true,
      result: 0
    }
  }

  //updates to make
  //doesn't allow users to click more than one operator in a row
  //clears screen after an operator
  //clear state if I press a number after =

  onClick = button => {
    if(this.state.result === 0){
      if(button === 'AC'){
         this.clearResult()
      } else if(button === '='){
        this.equalButtonPressed()
      } else if(button==='negative'){
        this.plusMinusPressed()
      }else {
        this.setState({
          result: '' + button
        })
      }
    } else {
      if (this.state.result === 'ERROR') {
        if (button === 'negative'){
          this.setState({
            positive: false,
            result: '-'
          })
        } else {
          this.setState({
            positive: true,
            result: button
          })
        }
      }else if(button === 'AC'){
        this.clearResult()
      }else if(this.state.result.length > 6){
        this.catchError()
      }else if(button ==='negative'){
        this.plusMinusPressed()
      }else if(button === '='){
        this.equalButtonPressed()
      } else if(button === '%'){
        this.pressPercentButton()
      } else {
        this.setState({
          result: this.state.result + button
        })
      }
    }
  }

  equalButtonPressed(){
    try {
      if(this.state.result === 0){
        this.setState({
          result: 0
        })
      } else {
        this.setState({
          result: eval(this.state.result) + ''
        })
      }    
    } catch {
      this.catchError()
    }
  }

  plusMinusPressed(){
    if(this.state.positive === true) {
      this.setState({
        positive: false,
        result: '-' + this.state.result,
      })
    }else{
      try {
        this.setState({
          positive:true,
          result: this.state.result.substr(1)
        })
      } catch {
        this.catchError()
      }  
    }
  }

  pressPercentButton(){
    this.setState({
        result: eval(this.state.result / 100) + ''
      })
  }


  clearResult() {
    this.setState({
      positive: true,
      result: 0
    })
  }

   catchError() {
     this.setState({
          result: 'ERROR'
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

