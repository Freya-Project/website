import styled, { css } from "styled-components";

export const MainContainer = styled.div`
    background-color: #121214;
    min-height: 100vh;
`;

export const Container = styled.div<{ background?: string }>`
    width: 73vw;
    padding: 0 20px;
    ${(props: any) =>
        props.background &&
        css`
            background-color: ${props.background};
        `}
`;

export const Separator = styled.div<{ height: number }>`
    display: block;
    width: 1px;
    height: ${(props) => props.height}px;
`;
