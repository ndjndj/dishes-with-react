import React from 'react';

class RecipeStep extends React.Component {
    render() {
        return (
            <div className="step">
                <div className="material-unit"><input type="text" /></div>
                <div className="step-desc">
                    <textarea />
                </div>
            </div>
        );
    }
}

export default RecipeStep;
