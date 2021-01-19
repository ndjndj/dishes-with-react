import React from 'react';
import RecipeCard from '../components/recipe-card';
import Button from '../components/button';
class RecipeCardTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: 1
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="recipe-card-table">
                    {this.state.map(
                        (card, i) => {
                            return <RecipeCard key={i} />
                        })
                    }
                </div>
                <Button desc="+" />
            </React.Fragment>
        );
    }
}

export default RecipeCardTable;
