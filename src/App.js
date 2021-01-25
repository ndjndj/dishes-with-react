import React from 'react';
import RecipeList from './screen/recipe-list';
import TagList from './screen/tag-list';
import Recipe from './screen/recipe';
import Calender from './screen/calender';
import Config from './screen/config';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <RecipeList />
          <Switch>
            <Route exact path="/tag" component={TagList}/>
            <Route exact path="/recipe" component={Recipe}/>
            <Route exact path="/calender" component={Calender}/>
            <Route exact path="/config" component={Config}/>
            <Route exact path="/" component={RecipeList}/>
          </Switch>
        </Router>
      </React.Fragment>

    );
  }
}

export default App;
