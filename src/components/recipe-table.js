import React from 'react';
import RecipeStep from '../components/recipe-step'
import Button from 'button';
class RecipeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: 1
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="recipe-step-table">
                    {this.state.steps.map(
                        (step, i) => {
                            return <RecipeStep key={i} />
                        })
                    }
                </div>
                <Button desc="+"/>
            </React.Fragment>

        );
    }
}

export default RecipeTable;
