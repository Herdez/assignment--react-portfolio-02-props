import React from 'react';
import Job from './Job';
import {jobsList} from '../project-files/data/datasource.js';

class WorkHistory extends React.Component {
	render(){
		return (
			 <section>
			    <h4>Work Experience</h4>
			    <div className="job-timeline">
			       {jobsList.map(function(job){
			          return <Job data={ job } />
			       })}
			    </div>
			 </section>
		);
	}
}

export default WorkHistory;