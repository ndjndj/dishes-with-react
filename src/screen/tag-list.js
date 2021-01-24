import React from 'react';
import Menu from '../components/menu';
import Header from '../components/header';
import TagTable from '../components/tag-table';

class TagList extends React.Component {
    render () {
        return(
            <React.Fragment>
                <Header />
                <TagTable />
                <Menu />
            </React.Fragment>
        );
    }
}

export default TagList;
