import React from 'react';

class Button extends React.Component {
    render() {
        const btnDesc = this.props.desc;
        return (
            <div>
                {btnDesc}
            </div>
        );
    }
}

export default Button;
