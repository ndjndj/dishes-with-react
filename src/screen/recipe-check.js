import React from 'react';
import Head from '../components/head';
import Body from '../components/body';
import Menu from '../components/menu';
import Header from '../components/header';
import RecipeCheckTable from '../components/recipe-check-table';
class RecipeCheck extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Head />
                <Body>
                    <Header />
                    <RecipeCheckTable />
                    <Menu />
                </Body>
            </React.Fragment>
        );
    }
}

export default RecipeCheck;
