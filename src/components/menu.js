import React from 'react';
import Button from '../elements/button';

class Menu extends React.Component {
    render() {
        return (
            <div className = "menu">
                <Button desc="recipe" />
                <Button desc="tag" />
                <Button desc="+" />
                <Button desc="calender" />
                <Button desc="config" />
            </div>
        );
    }
}

export default Menu;
