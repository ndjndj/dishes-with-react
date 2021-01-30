import React from 'react';
import RecipeCard from '../components/recipe-card';
import Button from '../components/button';
class RecipeCardTable extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="recipe-card-table">
                    <RecipeCard />
                </div>
                <Button desc="+" link="add" />
            </React.Fragment>
        );
    }
}

export default RecipeCardTable;
