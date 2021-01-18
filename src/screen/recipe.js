import React from 'react';
import Head from '../components/head';
import Body from '../components/body';
import Menu from '../components/menu';
import Button from '../components/button';
import Header from '../components/header';
import RecipeMaterial from '../components/recipe-material';
import RecipeTable from '../components/recipe-table';

class Recipe extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Head title="recipe"/>
                <Body>
                    <Header />
                    <main>
                        <RecipeMaterial />
                        <RecipeTable />
                    </main>
                    <Menu />
                </Body>
            </React.Fragment>

        );
    }
}

export default Recipe;
