import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Calendar from './components/Calendar'; 
import EventContainer from './components/Event';
import EventDetails from './components/EventDetails';

import './App.css';

 const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Calendar} />
        <Route exact path="/event" component={EventContainer} />
        <Route exact path="/event-details" component={EventDetails} />
      </div>
    </Router>
  );
}

export default App;
