import React, { Component } from 'react';
import SkillsList from './components/SkillsList';
import EducationHistory from './components/EducationHistory';
import WorkHistory from './components/WorkHistory';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SkillsList />
        <EducationHistory />
        <WorkHistory />
      </React.Fragment>
   );
  }
}

export default App;
