import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesWithNavbar from './RoutesWithNavbar'; // Adjust the import path as needed

function App() {
  return (
    <Router>
      <RoutesWithNavbar />
    </Router>
  );
}

export default App;
