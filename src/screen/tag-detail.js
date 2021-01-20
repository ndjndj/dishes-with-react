import React from 'react';
import Head from '../components/head';
import Body from '../components/body';
import Menu from '../components/menu';
import Header from '../components/header';

class TagDetail extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Head />
                <Body>
                    <Header />

                    <Menu />
                </Body>
            </React.Fragment>
        );
    }
}

export default TagDetail;
