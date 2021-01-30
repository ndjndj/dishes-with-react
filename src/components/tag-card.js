import React from 'react';

class TagCard extends React.Component {
    render () {
        return(
            <div className="wrapper">
                <div className="img">img</div>
                <div className="desc">
                    <div className="title">tag title</div>
                    <div className="under">
                        <div className="category">rate</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TagCard;
