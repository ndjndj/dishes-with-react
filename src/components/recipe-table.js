import React from 'react';
import RecipeStep from '../components/recipe-step'
import Button from 'button';
class RecipeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titles: [
                { title: 'Step1' },
                { title: 'Step2' },
                { title: 'Step3' },
                { title: 'Step4' },
                { title: 'Step5' }
            ]
        };
    }
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
