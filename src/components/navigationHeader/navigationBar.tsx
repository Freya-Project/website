import React from 'react';
import { NavBar, NavButton, NavButtonIcon } from './styles';


const NavigationBar = () => {
    return <NavBar>
        <NavButton type="white">
            <NavButtonIcon src="/img/nav_icons/home.svg"/>
            <p>Home</p>
        </NavButton>
        <NavButton type="selected">
            <NavButtonIcon src="/img/nav_icons/hamburger.svg"/>
            <p>Commands</p>
        </NavButton>
        <NavButton type="nobg">
            <NavButtonIcon src="/img/nav_icons/credits.svg"/>
            <p>Credits</p>
        </NavButton>
        <NavButton type="nobg">
            <NavButtonIcon src="/img/nav_icons/discord.svg"/>
            <p>Support</p>
        </NavButton>
        <NavButton type="nobg">
            <NavButtonIcon src="/img/nav_icons/servers.svg"/>
            <p>Servers</p>
        </NavButton>
    </NavBar>;
}

export default NavigationBar;
