import React from 'react';

class Job extends React.Component {
	render(){
		console.log(this.props.data);
		return (
	      <div class="job">
	        <div class="job__years">
	          <h6 class="job__end">{this.props.data.years.end}</h6>
	          <h6 class="job__start">{this.props.data.years.start}</h6>
	        </div>
	        <h5 class="job__title">{this.props.data.title}</h5>
	        <h5 class="job__company">{this.props.data.company}</h5>
	        <p class="job__description">{this.props.data.description}</p>
	      </div>
		);
	}
}

export default Job;