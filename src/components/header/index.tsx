import React from 'react';
import ReactTooltip from 'react-tooltip';
import Image from 'next/image';
import { Container, Separator } from '../../styles';
import NavigationHeader from '../navigationHeader';
import {
    FreyaAvatar,
    FreyaAvatarTitle,
    BackgroundDiv,
    DiscordButton,
    HeaderDiv,

} from './styles';

const Header = () => {
    return (<BackgroundDiv>
        <Container>
            <HeaderDiv>
                <FreyaAvatar 
                    src="/img/freya_icon.png"
                    width={42} height={42}
                    alt="freya"/>
                <FreyaAvatarTitle><strong>Freya</strong>Bot</FreyaAvatarTitle>
                <DiscordButton href="https://discord.com/oauth2/authorize?client_id=630894464667484179&scope=bot" data-tip="Bot link" data-for="header-tooltip">
                    <Image 
                        src="/img/discord_logo.png"
                        height={25} width={25}
                        layout="fixed"
                    />
                    <Image
                        src="/img/discord_logo_name.png"
                        height={25} width={102}
                        layout="fixed"

                    />
                </DiscordButton>
                <ReactTooltip id="header-tooltip" effect="solid" backgroundColor="#333"/>
            </HeaderDiv>
        </Container>
        <Separator height={48}/>
        <NavigationHeader/>
    </BackgroundDiv>);
}

export default Header;
