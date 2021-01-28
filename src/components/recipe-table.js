import React from 'react';
import RecipeStep from '../components/recipe-step'
import Button from '../components/button';
class RecipeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stepNumber: [],
        }
    }
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
