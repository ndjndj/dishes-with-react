import React from 'react';
import Head from '../components/head';
import Body from '../components/body';
import Menu from '../components/menu';
import Header from '../components/header';
import Button from '../components/button';
import TagCard from '../components/tag-thumb';

class TagDetail extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Head />
                <Body>
                    <Header />
                        <Button desc="Edit" className="edit" />
                        <TagCard />
                    <Menu />
                </Body>
            </React.Fragment>
        );
    }
}

export default TagDetail;
