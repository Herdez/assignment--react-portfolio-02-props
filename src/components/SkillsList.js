import React from 'react';
import Skills from './Skills.js';
import {skills} from '../project-files/data/datasource.js';

class SkillsList extends React.Component {
	render(){
		return (
	        <section>
	          <h4>Skills</h4>
	          <div className="skills-list">
	             {skills.map(function(skill){
	                return <Skills data={ skill } />
	             })}
	          </div>
	        </section>
		);
	}
}

export default SkillsList;