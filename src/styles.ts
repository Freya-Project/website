import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.bg};
`;

export const MainContainer = styled.div`
  display: flex;
  max-width: 1240px;
  width: 100%;
  flex-direction: column;
  margin: 0px 30px;
  background-color: ${(props) => props.theme.colors.fg};
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export const DisabledCss = css`
  &:disabled {
    overflow: hidden;
    &:after {
      content: "🛠️WIP";
      display: flex;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #333b;
      color: #bbb;
      top: 0;
      left: 0;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    &:hover {
      &:after {
        opacity: 1;
      }
    }
  }
`;
