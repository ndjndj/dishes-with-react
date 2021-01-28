import React from 'react';
import '../styles/button.css';
import { Link } from 'react-router-dom';
class Button extends React.Component {
    render() {
        const btnDesc = this.props.desc;
        const link = this.props.link;
        const handleClick = this.props.onClick;
        let jsx;

        if (link === undefined) {
            jsx = <div onClick={handleClick} className="btn">{btnDesc}</div>
        } else {
            jsx = <Link to={link} className="btn">{btnDesc}</Link>
        }


        return (
            <React.Fragment>
                {jsx}
            </React.Fragment>

        );
    }
}

export default Button;
