import React from 'react';
import Menu from '../components/menu';
import Header from '../components/header';
import Button from '../components/button';
import TagThumb from '../components/tag-thumb';

class TagDetail extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Button desc="Edit" className="edit" />
                <TagThumb />
                <Menu />
            </React.Fragment>
        );
    }
}

export default TagDetail;
