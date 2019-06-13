import React from 'react'

class Result extends React.Component {
	
	render() {
		let {result} = this.props;
		return (
		    <div className='result'>
		    	<p className='result-text'>
		    		{result}
		    	</p>
		    </div>
		)
	}
}

export default Result;