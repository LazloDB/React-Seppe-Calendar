import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Calendar from './components/Calendar'; 

import './App.css';


 const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Calendar} />
      </div>
    </Router>
  );
}

export default App;
