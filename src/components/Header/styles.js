import { styled } from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4rem;
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
      padding: 1rem;
      border: 2px solid rgb(90, 94, 93);
      border-radius: 10px;
      margin: 0 10px;
      .icon {
          color: rgb(90, 94, 93);
        font-size: 1.3rem;
      }
    }
  }
`;
