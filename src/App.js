import React from 'react';
import Keypad from './Components/Keypad'
import Result from './Components/Result'

function App() {
  return (
    <div className='calculator-wrapper'>
      <Result />
      <Keypad />
    </div>
  );
}

export default App;
