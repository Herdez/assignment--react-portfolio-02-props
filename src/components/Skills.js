import React from 'react';

class Skills extends React.Component {
	render(){
		return(
			<span className="skills-list__single">{this.props.data}</span>
		);
	}
}

export default Skills;