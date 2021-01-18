import React from 'react';
import RecipeStep from '../components/recipe-step'
import Button from 'button';
class RecipeTable extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="recipe-step-table">
                    <RecipeStep title="step1"/>
                    <RecipeStep title="step2"/>
                    <RecipeStep title="step3"/>
                    <RecipeStep title="step4"/>
                    <RecipeStep title="step5"/>
                </div>
                <Button desc="+"/>
            </React.Fragment>

        );
    }
}

export default RecipeTable;
