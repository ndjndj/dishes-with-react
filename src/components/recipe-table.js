import React from 'react';
import RecipeStep from '../components/recipe-step'
import Button from '../components/button';
class RecipeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stepNumber: [<RecipeStep key="1" />],
        }
    }

    handleClick = (e) => {
        const step = this.state.stepNumber;
        const stepNum = this.state.stepNumber.length + 1;
        this.setState({
            stepNumber: step.concat([
                <RecipeStep key={String(stepNum)} />
            ])
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="recipe-step-table">
                    {this.state.stepNumber}
                </div>
                <Button desc="+" onClick={this.handleClick} />
            </React.Fragment>

        );
    }
}

export default RecipeTable;
