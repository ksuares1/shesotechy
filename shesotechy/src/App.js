import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Nav';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <div>
            <Navbar/>  
          <div>
            {/* <Route exact path="/" component={HomeComponent} />
            <Route exact path="/about" component={AboutComponent} /> */}
            {/* <Route exact path="/flute" component={FluteRepairs} /> */}
            {/* <Route exact path="/contact" component={ContactPage} />
             <Route exact path="/blog" component={BlogComponent} /> */}

          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
