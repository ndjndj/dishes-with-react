import React from 'react';

class TagCard extends React.Component {
    render () {
        return(
            <div className="wrapper">
                <div className="img">img</div>
                <div className="desc">
                    <div class="title">tag title</div>
                    <div class="under">
                        <div class="category">rate</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TagCard;
