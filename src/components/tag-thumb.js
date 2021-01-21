import React from 'react';

class TagThumb extends React.Component {
    render() {
        return (
            <div className="tag-card">
                <div className="thumb">img</div>
                <div className="name">name</div>
                <div className="tag">tag name</div>
                <div className="desc-box"><p>description</p></div>
            </div>
        );
    }
}

export default TagThumb;
