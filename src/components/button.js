import React from 'react';
import '../styles/button.css';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
class Button extends React.Component {
    render() {
        const btnDesc = this.props.desc;
        const link = this.props.link;
        const component = this.props.component
        return (
            <Router>
                <Link to={link} className="btn">
                    {btnDesc}
                </Link>
                <Route exact path={link} component={component}/>
            </Router>
        );
    }
}

export default Button;
