import React from 'react';
import Button from './button';
import '../styles/menu.css';
import RecipeCheck from '../screen/recipe';
class Menu extends React.Component {
    render() {
        return (
            <div className = "menu">
                <Button component={RecipeCheck} link="recipe" desc="recipe"  />
                <Button component={RecipeCheck} link="tag" desc="tag" />
                <Button component={RecipeCheck} link="add" desc="+" />
                <Button component={RecipeCheck} link="calender" desc="calender" />
                <Button component={RecipeCheck} link="config" desc="config" />
            </div>
        );
    }
}

export default Menu;
