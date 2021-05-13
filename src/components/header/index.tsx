import React from 'react';
import ReactTooltip from 'react-tooltip';
import { Container, Separator } from '../../styles';
import NavigationHeader from '../navigationHeader';
import {
    Avatar,
    AvatarTitle,
    BackgroundDiv,
    DiscordButton, HeaderDiv
} from './styles';

const Header = () => {
    return (<BackgroundDiv>
        <Container>
            <HeaderDiv>
                <Avatar src="/img/freya_icon.png" alt="freya"/>
                <AvatarTitle><strong>Freya</strong>Bot</AvatarTitle>
                <DiscordButton href="https://discord.com/oauth2/authorize?client_id=630894464667484179&scope=bot" data-tip="Bot link" data-for="header-tooltip">
                    <img src="/img/discord_logo.png"/>
                    <img src="/img/discord_logo_name.png"/>
                </DiscordButton>
                <ReactTooltip id="header-tooltip" effect="solid" backgroundColor="#333"/>
            </HeaderDiv>
        </Container>
        <Separator height={48}/>
        <NavigationHeader/>
    </BackgroundDiv>);
}

export default Header;
