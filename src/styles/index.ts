import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: #121214;
    min-height: 100vh;
`;

export const Container = styled.div`
    width: 73vw;
    padding: 0 20px;
`;

export const Separator = styled.div<{ height: number }>`
    display: block;
    width: 1px;
    height: ${(props) => props.height}px;
`;
