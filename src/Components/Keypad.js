import React from 'react'

class Keypad extends React.Component {
	
	render() {
		return (
		    <div className="keypad">
		    	<div className="top-and-number-keys">
			        <div className="top-keys">
			            <button className="calc-key top-key clear" onClick={e => this.props.onClick('AC')}>AC</button>
			            <button className="calc-key top-key plus-minus" onClick={e => this.props.onClick('negative')}>+/-</button>
			            <button className="calc-key top-key percent" onClick={e => this.props.onClick('%')}>%</button>
			        </div>
			        <div className="number-keys">
			            <button className="calc-key number-key key-9" onClick={e => this.props.onClick(9)}>9</button>
			            <button className="calc-key number-key key-8" onClick={e => this.props.onClick(8)}>8</button>
			            <button className="calc-key number-key key-7" onClick={e => this.props.onClick(7)}>7</button>
			            <button className="calc-key number-key key-6" onClick={e => this.props.onClick(6)}>6</button>
			            <button className="calc-key number-key key-5" onClick={e => this.props.onClick(5)}>5</button>
			            <button className="calc-key number-key key-4" onClick={e => this.props.onClick(4)}>4</button>
			            <button className="calc-key number-key key-4" onClick={e => this.props.onClick(3)}>3</button>
			            <button className="calc-key number-key key-4" onClick={e => this.props.onClick(2)}>2</button>
			            <button className="calc-key number-key key-4" onClick={e => this.props.onClick(1)}>1</button>
			            <button className="calc-key number-key key-0" onClick={e => this.props.onClick(0)}>0</button>
			            <button className="calc-key number-key key-dot" onClick={e => this.props.onClick('.')}>.</button>
			        </div>
			    </div>
			        <div className="operation-keys">
			            <button className="calc-key operation-key divide" onClick={e => this.props.onClick('/')}>/</button>
			            <button className="calc-key operation-key multiply" onClick={e => this.props.onClick('*')}>x</button>
			            <button className="calc-key operation-key subtract" onClick={e => this.props.onClick('-')}>-</button>
			            <button className="calc-key operation-key add" onClick={e => this.props.onClick('+')}>+</button>
			            <button className="calc-key operation-key equal" onClick={e => this.props.onClick("=")}>=</button>
			    	</div>
        	</div> 

		)
	}
}

export default Keypad;