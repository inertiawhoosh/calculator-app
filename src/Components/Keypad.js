import React from 'react'

class Keypad extends React.Component {
	
	render() {
		return (
		    <div className="keypad">
		        <div className="top-keys">
		            <button className="calc-key clear">AC</button>
		            <button className="calc-key plus-minus">+/-</button>
		            <button className="calc-key percent">%</button>
		        </div>
		        <div className="number-keys">
		            <button className="calc-key key-0" onClick={e => this.props.onClick(0)}>0</button>
		            <button className="calc-key key-dot" onClick={e => this.props.onClick('.')}>.</button>
		            <button className="calc-key key-1" onClick={e => this.props.onClick(1)}>1</button>
		            <button className="calc-key key-2" onClick={e => this.props.onClick(2)}>2</button>
		            <button className="calc-key key-3" onClick={e => this.props.onClick(3)}>3</button>
		            <button className="calc-key key-4" onClick={e => this.props.onClick(4)}>4</button>
		            <button className="calc-key key-5" onClick={e => this.props.onClick(5)}>5</button>
		            <button className="calc-key key-6" onClick={e => this.props.onClick(6)}>6</button>
		            <button className="calc-key key-7" onClick={e => this.props.onClick(7)}>7</button>
		            <button className="calc-key key-8" onClick={e => this.props.onClick(8)}>8</button>
		            <button className="calc-key key-9" onClick={e => this.props.onClick(9)}>9</button>
		        </div>
		        <div className="operation-keys">
		            <button className="calc-key divide">/</button>
		            <button className="calc-key multiply">x</button>
		            <button className="calc-key subtract">-</button>
		            <button className="calc-key add">+</button>
		            <button className="calc-key equal">=</button>
		        </div>
        	</div> 

		)
	}
}

export default Keypad;