import React from 'react';
import '../styles/button.css';
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
