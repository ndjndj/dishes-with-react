import React from 'react';
import Header from '../components/header';
import Button from '../components/button';
import RecipeCheckTable from '../components/recipe-check-table';
import Menu from '../components/menu';

class ConfirmRecipe extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <RecipeCheckTable />
                <Button desc="registration" className="edit" />
                <Menu />
            </React.Fragment>
        );
    }
}

export default ConfirmRecipe;
