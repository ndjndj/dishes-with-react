import React from 'react';

class RecipeCard extends React.Component {
    render() {
        return (
            <div classNmae="wrapper">
                <div className="img">img</div>
                <div className="desc">
                    <div className="recipe title">recipe title</div>
                    <div className="under">
                        <div className="category">category</div>
                        <div className="date">created at</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeCard;
