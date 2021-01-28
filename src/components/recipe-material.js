import React from 'react';
import Button from '../components/button';
import RecipeMaterialAtom from '../components/recipe-material-atom';
class RecipeMaterial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            materialNumber: [],
        }
    }
    handleClick() {
        return;
    }
    render() {
        return(
            <div className="materials">
                <h2>Materials</h2>
                <div className="material">
                    <RecipeMaterialAtom num="1" />
                </div>
                <Button desc="+" />
            </div>
        );
    }
}

export default RecipeMaterial;
