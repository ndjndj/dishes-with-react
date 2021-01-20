import React from 'react';
import CheckRecipeMaterial from '../components/check-recipe-material';
import CheckRecipeStep from '../components/check-recipe-step';
class RecipeCheckTable extends React.Component {
    render () {
        return (
            <React.Component>
                <CheckRecipeMaterial />
                <CheckRecipeStep />
            </React.Component>
        );
    }
}

export default RecipeCheckTable;
