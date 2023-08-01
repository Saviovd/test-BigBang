import { styled } from "styled-components";

export const DashBoardStyle = styled.div`
  display: grid;
  grid-template-areas:
    "side-bar header tasks"
    "side-bar panel tasks";
  grid-template-columns: 300px auto 320px;
  grid-template-rows: 170px auto;
  @media screen {
    @media (max-width: 1260px) {
      grid-template-columns: 260px auto 290px;
      grid-template-rows: 160px auto;
    }
    @media (max-width: 1075px) {
      grid-template-columns: 200px auto 290px;
    }
    @media (max-width: 1000px) {
      grid-template-columns: 200px auto 240px;
    }
    @media (max-width: 900px) {
      grid-template-areas:
        "side-bar header"
        "side-bar panel";
      grid-template-columns: 200px auto;
    }
  }
`;
