import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">  
                <img className="Logo" src={Logo} alt="ThiFlix Logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo video
            </Button>
        </nav>
    );
}

export default Menu;