import React from 'react';
import RecipeStep from '../components/recipe-step'
import Button from '../components/button';
class RecipeTable extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="recipe-step-table">
                    <RecipeStep />
                </div>
                <Button desc="+" />
            </React.Fragment>

        );
    }
}

export default RecipeTable;
