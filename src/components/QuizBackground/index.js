import styled from "styled-components";

export const QuizBackground = styled.div`
  flex: 1;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  @media screen and (max-width: 480px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
      background-position: center;
      background-image: linear-gradient(
          transparent,
          ${({ theme }) => theme.colors.mainBg}
        ),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;
