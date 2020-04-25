import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SingleMovie from './components/SingleMovie';
import MovieGrid from './components/MovieGrid';

const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <h1>Movie on Rails</h1>
        <Switch>
          <Route path="/singleMovie" component={SingleMovie}></Route>
          <Route path="/" component={MovieGrid}></Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default App;
