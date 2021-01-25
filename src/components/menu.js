import React from 'react';
import Button from './button';
import '../styles/menu.css';
class Menu extends React.Component {
    render() {
        return (
            <div className = "menu">
                <Button link="/" desc="recipe"  />
                <Button link="/tag" desc="tag" />
                <Button link="/add" desc="+" />
                <Button link="/calender" desc="calender" />
                <Button link="/config" desc="config" />
            </div>
        );
    }
}

export default Menu;
