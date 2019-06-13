import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class Doc extends React.Component{
  componentDidMount(){
    document.title = "calculator-app"
  }

ReactDOM.render(<App />, document.getElementById('root'));