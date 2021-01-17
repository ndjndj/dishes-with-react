import React from 'react';

class Head extends React.Component {
    render() {
        const title = this.props.title;
        return (
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title}</title>
            </head>
        );
    }
}

export default Head;
