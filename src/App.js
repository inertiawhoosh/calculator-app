import React from 'react';
import Keypad from './Components/Keypad'
import Result from './Components/Result'
import './Components/components.css'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      positive: true,
      result: 0,
      operator: false
    }
  }

  //updates to make
  //doesn't allow users to click more than one operator in a row
  //clears screen after an operator
  //clear state if I press a number after doing an equation

  onClick = button => {
    if(this.state.result === 0){
      if(button === 'AC'){
         this.clearResult()
      } else if(button === '='){
        this.equalButtonPressed()
      } else if(button==='negative'){
        this.plusMinusPressed()
      } else if(button ==="%"){
        this.pressPercentButton()
      } 
      else if( button === "+" ||
        button === "-" || 
        button === "*" ||
        button === "/")
      {
        this.clearResult()
      }
      else {
        this.setState({
          result: '' + button
        })
      }
    //if state is at ERROR
    } else if(this.state.result === 'ERROR'){
      if (button === 'AC'){
        this.clearResult()
      } else if(button ==='negative'){
        this.setState({
          positive: false,
          result: '-'
        })
      } else if( button === "+" ||
        button === "-" || 
        button === "*" ||
        button === "/")
      {
        this.clearResult()
      } else {
        this.setState({
          positive: true,
          result: button + ''
        })
      }
    //standard state
    } else {
      if(button === 'AC'){
        this.clearResult()
      }else if( button === "+"){
        this.setState({
          operator: this.state.result,
          result: ''
        })
      }
        else if(this.state.result.length > 6){
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

  //helper functions
  equalButtonPressed(){
    try {
      if(this.state.result === 0){
        this.setState({
          result: 0
        })
      } else {
        this.setState({
          result: (eval(this.state.result + "+" + this.state.operator)) + '',
          operator: ''
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
    if(this.state.result === 0){
      this.clearResult()
    } else {
      this.setState({
        result: eval(this.state.result / 100) + ''
      })
    }
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

