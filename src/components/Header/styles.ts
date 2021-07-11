import styled from "styled-components";
import { DisabledCss } from "../../styles";

export const Wrapper = styled.div`
  display: flex;
  height: 66px;
  padding: 0 22px;
  width: 100%;
  align-items: center;
  color: #fff;
  column-gap: 9px;

  * {
    user-select: none;
  }
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 36px;
  font-weight: 45px;
  & span {
    font-weight: 600;
  }
`;

export const Logo = styled.img`
  -ms-interpolation-mode: bicubic;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  border: 2px solid #fff;
`;

export const DiscordButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  background: 0;
  border: 0;
  margin-left: 10px;
  padding: 0 20px;
  cursor: pointer;
  transition: filter 0.3s ease;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.discord};
    transform: skewX(-16.35deg);
  }

  & img {
    z-index: 1;
  }

  & img:first-child {
    height: 42px;
  }

  & img:last-child {
    height: 35px;
  }

  &:hover {
    filter: brightness(1.1);
  }
`;

export const LoginButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.redButton};
  padding: 0 25px;
  border: 0;
  margin-left: auto;
  font-family: "Poppins";
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  column-gap: 4px;
  color: #fff;
  transition: filter 0.3s ease;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }

  &:not(:disabled) {
    &:hover {
      filter: brightness(1.1);
    }
  }

  ${DisabledCss}
`;
