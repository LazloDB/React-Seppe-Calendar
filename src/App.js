import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Calendar from './components/Calendar'; 
import EventContainer from './components/Event';

import './App.css';

 const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Calendar} />
        <Route exact path="/event" component={EventContainer} />
      </div>
    </Router>
  );
}

export default App;
