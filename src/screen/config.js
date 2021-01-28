import React from 'react';
import Menu from '../components/menu';
import Header from '../components/header';
import '../styles/config.css';
class Config extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="config">
                    <div className="config-link">config1</div>
                    <div className="config-link">config2</div>
                    <div className="config-link">config3</div>
                    <div className="config-link">config4</div>
                    <div className="config-link">config5</div>
                </div>
                <Menu />
            </React.Fragment>

        );
    }
}

export default Config;
