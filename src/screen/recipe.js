import React from 'react';
import Menu from '../components/menu';
import Header from '../components/header';
import RecipeMaterial from '../components/recipe-material';
import RecipeTable from '../components/recipe-table';
import Button from '../components/button';
class Recipe extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    <RecipeMaterial />
                    <RecipeTable />
                    <Button desc="Done" />
                </main>
                <Menu />
            </React.Fragment>

        );
    }
}

export default Recipe;
