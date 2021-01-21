import React from 'react';
import Head from '../components/head';
import Body from '../components/body';
import Menu from '../components/menu';
import Header from '../components/header';
import TagTable from '../components/tag-table';

class TagList extends React.Component {
    render () {
        return(
            <React.Fragment>
                <Head />
                <Body>
                    <Header />
                    <TagTable />
                </Body>
                <Menu />
            </React.Fragment>
        );
    }
}

export default TagList;
