import React from 'react';

class RecipeStep extends React.Component {
    render() {
        return (
            <div className="step">
                <h2>{this.props.title}</h2>
                <div className="step-desc">
                    <textarea>
                        samplesamplesamplesamplesamplesamplesamplesample
                        samplesamplesamplesamplesamplesamplesamplesample
                        samplesamplesamplesamplesamplesamplesamplesample
                    </textarea>
                </div>
            </div>
        );
    }
}

export default RecipeStep;
