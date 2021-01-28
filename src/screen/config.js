import React from 'react';
import Menu from '../components/menu';
import Header from '../components/header';
class Config extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className = "config">
                    this component is Config.
                </div>
                <Menu />
            </React.Fragment>

        );
    }
}

export default Config;
