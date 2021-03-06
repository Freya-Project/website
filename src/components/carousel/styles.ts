import styled, { css } from "styled-components";

// Carousel //

export const CarouselTitle = styled.h3`
    font-size: 32px;
    font-weight: 300;
    text-align: center;
    text-decoration: underline;
    margin-bottom: 8px;
`;

export const CarouselDescription = styled.p`
    font-size: 16px;
    width: 100%;
    /* word-break: break-all; */
    font-weight: 300;
    word-wrap: break-word;
`;

export const ReadMoreButton = styled.button`
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
    font-size: 18px;
    color: black;
    background-color: white;
    padding: 5px 10px;
    border-radius: 0.3rem;
    border: none;
    outline: none;
    transition: all 0.3s ease;
    justify-self: flex-end;
    cursor: pointer;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);

    * {
        text-decoration: none;
        color: black;
    }

    &::after {
        content: "";
        z-index: 1;
        display: block;
        position: absolute;
        background-color: white;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 0.3rem;
        opacity: 0;
        pointer-events: none;
    }

    &:hover {
        &::after {
            animation: 0.8s linear ActiveButtonAnim;
        }
    }
`;

export const CarouselSection = styled.div<{ enter?: boolean }>`
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    top: 0;
    left: 0;
    padding: 15px;
`;

export const SlideContainer = styled.div<{
    direction: "left" | "right" | "nodirection";
}>`
    ${(props: any) => {
        let pos1, pos2;
        if (props.direction === "nodirection") {
            [pos1, pos2] = ["-100%", "-100%"];
        } else {
            [pos1, pos2] =
                props.direction === "left" ? ["-100%", "0%"] : ["0%", "-100%"];
        }
        return css`
            --pos1: ${pos1};
            --pos2: ${pos2};
        `;
    }}

    left: var(--pos2);
    @keyframes SlideAnim {
        0% {
            left: var(--pos1);
        }
        100% {
            left: var(--pos2);
        }
    }
    animation: 0.8s linear SlideAnim;
    width: 200%;
    height: 100%;
    position: absolute;
    display: flex;
    top: 0;
    padding: 0;
    margin: 0;
`;

export const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    /* padding: 15px; */
    width: 100%;
    max-width: 600px;
    /* height: 100%; */
    color: white;
    background-color: #0f0f0f7f;
    overflow: hidden;

    * {
        font-family: "Poppins";
    }
`;

export const CarouselBg = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    width: 100%;
    height: 440px;
    padding: 60px 60px;
    object-fit: scale-down;
    background-repeat: no-repeat;
    background-position-x: 0%;
    grid-area: carousel;
    overflow: hidden;
    &::before {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        /* filter: blur(20px); */
        background-image: url("/img/carousel_bg.png");
    }
`;

// Controls //

export const CarousselControls = styled.div`
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    column-gap: 10px;
`;

export const ControlIndicator = styled.div<{ active?: boolean }>`
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: ${(props: any) => (props.active ? "#45DD74" : "#ddd")};
    transition: all 0.3s ease;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        filter: brightness(1.5);
    }
`;
