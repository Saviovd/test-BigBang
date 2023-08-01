import { styled } from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 4rem 1rem;
  margin: 0 auto;
  height: 150px;
  grid-area: header;

  .current-session {
    .title {
      font-size: 2rem;
    }
    .subtitle {
      font-size: 0.9rem;
      font-weight: 500;
    }
  }

  .icons {
    display: flex;
    align-items: center;

    .icon-box {
      border: 1px solid rgb(90, 94, 93);
      padding: 0.7rem 0.9rem;
      border-radius: 10px;
      margin: 0 10px;
      cursor: pointer;
      .icon {
        fill: rgb(90, 94, 93);
        font-size: 1rem;
      }
    }
  }
`;
