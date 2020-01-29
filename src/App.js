// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import routes
import Routes from './routes/Routes';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      home: true,
      links: false,
      MI: false,
      CTAs: false,
    }
  }

  ONRouting = () => {
    return(
      <Router>
        <div>
          <div>
            <Switch>
              <Route path="*" component={Routes} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }

  render(){
    switch(this.state.home){
      case true:
        return this.ONRouting()
      default:
        return this.ONRouting()
    }
  }
}

export default App;
