import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Cats from './pages/Cats';

class App extends Component {
  render() {
    return (
      <Router>
      	<div>
	      	<Header />

	      	<Route exact path="/" component={Home} />
	      	<Route path="/cats" component={Cats} />
	      </div>
      </Router>
    );
  }
}

export default App;
