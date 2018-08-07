import React from 'react';
import EduTitle from './EduTitle';
import {eduList} from '../project-files/data/datasource.js';

class EducationHistory extends React.Component {
	render(){
		return (
			<section>
			  <h4>Education</h4>
			  <div className="degree-list">
			    {eduList.map(function(item){
			    	return <EduTitle data={ item }/>
			    })}
			  </div>
			</section>						
		);
	}
}

export default EducationHistory;