import React from 'react';
import '../styles/button.css';
import { Link } from 'react-router-dom';
class Button extends React.Component {
    render() {
        const btnDesc = this.props.desc;
        const link = this.props.link;
        let jsx;
        
        if (link === undefined) {
            jsx = <div className="btn">{btnDesc}</div>
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
