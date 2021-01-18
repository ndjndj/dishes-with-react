import React from 'react';

class RecipeMaterial extends React.Component {
    render() {
        return(
            <div className="materials">
                <h2>Materials</h2>
                <div className="material">
                    <div className="material-title">Material 1</div>
                    <div className="material-amount"><input type="number"/></div>
                    <div className="material-unit"><input type="text" /></div>
                </div>
                <div className="btn">+</div>
            </div>
        );
    }
}

export default RecipeMaterial;
