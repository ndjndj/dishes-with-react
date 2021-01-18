import React from 'react';

class RecipeMaterialAtom extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="material-title">{"Material" + this.props.num}</div>
                <div className="material-amount"><input type="number"/></div>
                <div className="material-unit"><input type="text" /></div>
            </React.Fragment>

        );
    }
}

export default RecipeMaterialAtom;
