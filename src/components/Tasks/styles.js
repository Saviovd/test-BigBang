import { styled } from "styled-components";

export const TasksStyle = styled.div`
  height: 100vh;
  width: 320px;
  background-color: rgb(255, 255, 255);
  grid-area: tasks;
  padding: 3rem 2rem;

  @media screen {
    @media (max-width: 1260px) {
      width: 290px;
    }
    @media (max-width: 1000px) {
      width: 240px;
      padding: 3rem 1rem;
    }
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const Title = styled.h4`
  background-color: inherit;
  color: rgb(16 16 16);
  margin-bottom: 1.5rem;
`;
