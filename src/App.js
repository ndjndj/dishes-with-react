import React from 'react';
import RecipeList from './screen/recipe-list';
import RecipeCheck from './screen/recipe';
import TagList from './screen/tag-list';
import Recipe from './screen/recipe';
import Calender from './screen/calender';
import Config from './screen/config';
import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      
      <RecipeList />
    );
  }
}

export default App;
