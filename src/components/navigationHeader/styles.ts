import styled, { css } from "styled-components";

export const NavigationContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 0.6fr 0.2fr 2.1fr;
    grid-template-areas: "navbar . carousel";
`;

// Navigation Bar //

type NavButton = {
    type?: "selected" | "white" | "nobg";
};

export const NavBar = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-area: navbar;
    width: 273px;
    height: 100%;
    background-color: #141211;
`;

export const NavButtonIcon = styled.i<{ src: string }>`
    width: 24px;
    height: 24px;
    margin-right: 9px;
    background-image: url(${(props) => props.src});
`;

export const NavButton = styled.nav<NavButton>`
    @keyframes ButtonIconAnim {
        0% {
            filter: brightness(1);
        }

        70% {
            filter: brightness(1);
        }

        100% {
            filter: brightness(0);
        }
    }

    @keyframes ButtonBgAnim {
        0% {
            height: 3px;
            width: 0%;
        }

        50% {
            height: 3px;
            width: 100%;
        }

        70% {
            height: 50%;
        }

        100% {
            height: 100%;
        }
    }

    @keyframes ButtonAnim {
        0% {
            color: white;
        }

        70% {
            color: white;
        }

        100% {
            color: black;
        }
    }

    @keyframes ActiveButtonAnim {
        0% {
            opacity: 1;
        }

        20% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

    display: flex;
    position: relative;
    align-items: center;
    width: 170px;
    height: 66px;
    padding-left: 21px;
    font-size: 18.76px;
    margin-bottom: 11px;
    cursor: pointer;

    * {
        z-index: 1;
        user-select: none;
    }

    img {
        margin-left: 8.99px;
    }

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    ${(props: NavButton) => {
        switch (props.type) {
            case "white":
                return css`
                    color: black;
                    background-color: white;
                    &:hover {
                        &::before {
                            opacity: 0;
                            z-index: 2;
                            background-color: white;
                            animation: 0.8s linear ActiveButtonAnim;
                        }
                    }
                `;
            case "selected":
                return css`
                    color: white;
                    background-color: #6e12b6;
                    &:hover {
                        &::before {
                            opacity: 0;
                            z-index: 2;
                            background-color: #6e12b6;
                            animation: 0.8s linear ActiveButtonAnim;
                        }
                    }
                `;
            case "nobg":
            default:
                return css`
                    color: white;
                    &:hover {
                        color: black;
                        animation: 0.5s linear ButtonAnim;

                        i {
                            filter: brightness(0);
                            animation: 0.5s linear ButtonIconAnim;
                        }

                        &::before {
                            top: initial;
                            bottom: 0;
                            background-color: white;
                            animation: 0.5s linear ButtonBgAnim;
                        }
                    }
                `;
        }
    }}
`;
