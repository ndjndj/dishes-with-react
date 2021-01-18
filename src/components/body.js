import React from 'react';

class Body extends React.Component {
    render() {
        return (
            <body>
                {this.props.component}
            </body>
        );
    }
}

export default Body;
