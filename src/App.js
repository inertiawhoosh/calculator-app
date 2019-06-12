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
