import React from 'react';
import RecipeList from './screen/recipe-list';
import TagList from './screen/tag-list';
import Recipe from './screen/recipe';
import Calender from './screen/calender';
import Config from './screen/config';
import ConfirmRecipe from './screen/confirm-recipe';
import NotFound from './screen/404';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/tag" component={TagList}/>
            <Route path="/calender" component={Calender}/>
            <Route path="/config" component={Config}/>
            <Route path="/add" component={Recipe}/>
            <Route path="/confirm-recipe" component={ConfirmRecipe} />
            <Route component={NotFound} />
            <Route path="/" component={RecipeList}/>
          </Switch>
        </Router>
      </React.Fragment>

    );
  }
}

export default App;
