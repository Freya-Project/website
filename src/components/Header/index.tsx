import React from "react";
import DiscordLogoImage from "../../assets/discord_logo.png";
import DiscordLogoNameImage from "../../assets/discord_logo_name.png";
import FreyaLogoImage from "../../assets/freya_logo.png";
import UserIconImage from "../../assets/user_icon.svg";
import * as Styles from "./styles";

function Header() {
  return (
    <Styles.Wrapper>
      <Styles.Logo draggable="false" src={FreyaLogoImage} />
      <Styles.Title>
        <span>Freya</span>Bot
      </Styles.Title>
      <Styles.DiscordButton>
        <img draggable="false" src={DiscordLogoImage} alt="discord" />
        <img draggable="false" src={DiscordLogoNameImage} alt="discord" />
      </Styles.DiscordButton>
      <Styles.LoginButton disabled>
        <img draggable="false" src={UserIconImage} alt="login" />
        Enter
      </Styles.LoginButton>
    </Styles.Wrapper>
  );
}

export default Header;
