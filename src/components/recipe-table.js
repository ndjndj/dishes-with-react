import React from 'react';
import RecipeStep from '../components/recipe-step'

class RecipeTable extends React.Component {
    render() {
        return (
            <div className="recipe-step-table">
                <RecipeStep title="step1"/>
            </div>
        );
    }
}

export default RecipeTable;
