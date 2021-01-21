import React from 'react';
import Head from '../components/head';
import Body from '../components/body';
import Menu from '../components/menu';
import Header from '../components/header';
import TagDetailAtom from '../components/tag-detail-atom';

class TagDetail extends React.Component {
    render () {
        return(
            <React.Fragment>
                <Head />
                <Body>
                    <Header />
                    <TagDetailAtom />
                </Body>
                <Menu />
            </React.Fragment>
        );
    }
}

export default TagDetail;
