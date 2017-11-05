import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/Home/Home'
import Contest from './components/Contests/Contest'
import ItemNew from './components/Items/ItemNew'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route strict path="contest/:id" component={Contest} />
          <Route strict path="items/new" component={ItemNew} />
        </div>
      </Router>
    )
  }
}

export default App;
