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
      operator: false,
    }
  }

  //updates to make
  //clear state if I press a number after doing an equation
  //going from NUM - to x gives me an error ()

  onClick = button => {
    switch(this.state.result){
      case (this.state.result.length > 6):
        this.catchError()
      break;

      case 0:
        this.caseZero(button)
      break;

      case 'ERROR':
        this.caseError(button)
      break;

      default:
        this.caseDefault(button)
      break;
    }
  }

  //switch functions
  caseZero(button){
    if(button === 'AC'){
           this.clearResult()
    } else if(button === '='){
          this.equalButtonPressed()
    } else if(button==='negative'){
          this.plusMinusPressed()
    } else if(button ==="%"){
          this.pressPercentButton()
    } else if( button === "+" ||
          button === "-" || 
          button === "*" ||
          button === "/")
        {
          this.clearResult()
    } else {
          this.setState({
            result: '' + button
          })
        }
    }

    caseError(button){
      if (button === 'AC'){
        this.clearResult()
      } else if(button ==='negative'){
        this.setState({
          positive: false,
          result: '-'
        })
      } else if( button === "+" || button === "-" || button === "*" || button === "/"){ 
        this.clearResult()
      } else {
        this.setState({
          positive: true,
          result: button + ''
          })
        }
      } 

    caseDefault(button){
      switch(button){
        case "AC":
          this.clearResult();
        break;

        case "+":
        case "-":
        case "*":
        case "/":
          if (this.state.operator) {
            if(this.state.operator[this.state.operate.length-1] === "+"){
              this.setState({
                result: 'test'
              })
            } else {
              this.setState({
                operator: this.state.operator + this.state.result + button,
                result: ''
              })
            }
          } else {
            this.setState({
              operator: this.state.result + button,
              result: ''
            })
          }
        break;

        case 'negative':
          this.plusMinusPressed()
        break;

        case '=':
          this.equalButtonPressed()
        break;

        case '%':
          this.pressPercentButton()
        break;

        default:
          this.setState({
            result: this.state.result + button
          })
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
        let test = this.button
        this.setState({
          result: (eval(this.state.operator + this.state.result)) + '',
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

