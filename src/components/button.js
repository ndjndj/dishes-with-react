import React from 'react';
import '../styles/button.css';
import { Link } from 'react-router-dom';
class Button extends React.Component {
    render() {
        const btnDesc = this.props.desc;
        const link = this.props.link;
        return (
            <Link to={link} className="btn">
                {btnDesc}
            </Link>
        );
    }
}

export default Button;
