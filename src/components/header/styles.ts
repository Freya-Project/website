import styled, { css } from "styled-components";

export const HeaderDiv = styled.header`
    display: grid;
    height: 50px;
    align-items: center;
    grid-template-columns: 38px 100px 1fr 3fr 1fr;
    grid-column-gap: 10px;
    /* background-color: #99ffbb; */
`;

export const Avatar = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 2px solid white;
`;

export const AvatarTitle = styled.h1`
    font-size: 28px;
    font-weight: 300;
    color: white;
    strong {
        font-weight: 400;
    }
`;

export const DiscordButton = styled.a`
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    position: relative;
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;

    transition: all 0.3s ease;

    cursor: pointer;

    &:hover {
        filter: brightness(1.1);
    }

    &::after {
        content: " ";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #7289da;
        top: 0;
        left: 0;
        transform: skewX(-25deg);
    }

    img {
        height: 25px;
        z-index: 1;
    }
`;

export const UserButton = styled.button`
    font-size: 20px;
    font-family: "Poppins";
    background-color: #e71d36;
    padding: 4px 10px;
`;
