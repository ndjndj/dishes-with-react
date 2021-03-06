import React from 'react';
import Button from '../components/button';
import RecipeMaterialAtom from '../components/recipe-material-atom';
class RecipeMaterial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            materialNumber: [
                <RecipeMaterialAtom num="1" key="1" />
            ],
        }
    }
    handleClick = (e) => {
        const matNum = this.state.materialNumber;
        const matNumIndex = matNum.length + 1;
        this.setState({
            materialNumber:
                matNum.concat([
                    <RecipeMaterialAtom
                        num={String(matNumIndex)}
                        key={String(matNumIndex)}
                    />])
        });
    }
    render() {
        return(
            <div className="materials">
                <h2>Materials</h2>
                <div className="material">
                    {this.state.materialNumber}
                </div>
                <Button desc="+" onClick={this.handleClick} />
            </div>
        );
    }
}

export default RecipeMaterial;
