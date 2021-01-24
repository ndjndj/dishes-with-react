import React from 'react';
import Menu from '../components/menu';
import Header from '../components/header';
import RecipeCardTable from '../components/recipe-card-table';
class RecipeList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    <RecipeCardTable />
                </main>
                <Menu />
            </React.Fragment>
        );
    }
}

export default RecipeList;
