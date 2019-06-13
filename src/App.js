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
      equalPressed: false
    }
  }

  onClick = button => {
    if(this.state.result.length > 6){
      this.catchError()
    } else if(this.state.equalPressed === true && button !== '%'){
        if (button === '+' || button === '-' || button === '/' || button === '*'){
          this.caseDefault(button)
        } else if (button === "="){
          this.setState({
            result: this.state.result,
          })
        } else {
          this.clearResult(button)
        }
    } else {
      switch(this.state.result){
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
  }

  //switch functions
  caseZero(button){
    switch(button){
      case 'AC':
      case '=':
      case '+':
      case '-':
      case '*':
      case '/':
      case '%':
        this.clearResult(button)
        break;

      case 'negative':
        this.plusMinusPressed()
        break;

      default:
        this.setState({
          result: '' + button
        })
      }
    }

    caseError(button){
      switch(button){
        case 'AC':
        case '+':
        case '-':
        case '*':
        case '/':
          this.clearResult(button)
          break;

        default:
          this.setState({
            positive: true,
            result: button + ''
          })
          break;

        case 'negative':
          this.setState({
            positive: false,
            result: '-'
          })
          break;
      }
    }

    caseDefault(button){
      switch(button){
        case 'AC':
          this.clearResult(button);
          break;

        case '+':
        case '-':
        case '*':
        case '/':
          if (this.state.operator) {
            this.setState({
              operator: this.state.operator + this.state.result + button,
              result: '',
              equalPressed: false
            })
          } else {
            this.setState({
              operator: this.state.result + button,
              result: '',
              equalPressed: false
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
        break;
      }
  }

  //helper functions
  equalButtonPressed(){
    try{
      this.setState({
        result: (eval(this.state.operator + this.state.result)) + '',
        operator: '',
        equalPressed: true
      })   
    } catch {
      this.catchError()
    }
  }

  plusMinusPressed(){
    if(this.state.positive === true) {
      if(this.state.result === 0){
        this.setState({
          positive: false,
          result: '-'
        })
      } else {
        this.setState({
          positive: false,
          result: '-' + this.state.result
        })
      }
    } else {
        if(this.state.result === '-'){
          this.clearResult()
        } else {
          this.setState({
            positive: true,
            result: this.state.result.substr(1)
          })
        }
    }      
  }

  pressPercentButton(){
      this.setState({
        result: eval(this.state.result / 100) + ''
      })
  }


  clearResult(button) {
    switch(button){
      case 'negative':
        this.setState({
          positive: true,
          result: '-',
          operator: false,
          equalPressed: false
        })
        break;

      case 'AC':
        this.setState({
         positive: true,
          result: 0,
          operator: false,
          equalPressed: false
        })
      break;

      default:
        if(this.state.equalPressed === false){
          this.setState({
            positive: true,
            result: 0,
            operator: false,
            equalPressed: false
          })
        } else {
           this.setState({
              positive: true,
              result: button + '',
              operator: false,
              equalPressed: false
            })
        }
        break;
    }
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

