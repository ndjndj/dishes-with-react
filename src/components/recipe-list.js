import React from 'react';
import Head from '../components/head';
import Body from '../components/body';
import Menu from '../components/menu';
import Header from '../components/header';
import RecipeCardTable from '../components/recipe-card-table';
class RecipeList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Head title="recipe-list" />
                <Body>
                    <Header />
                    <main>
                        <RecipeCardTable />
                    </main>
                    <Menu />
                </Body>
            </React.Fragment>
        );
    }
}

export default RecipeList;
