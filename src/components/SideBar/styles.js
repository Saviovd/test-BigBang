import { styled } from "styled-components";

export const SideBarStyle = styled.div`
  height: 100vh;
  width: 300px;
  padding: 2rem;
  border-right: 2px solid rgb(225, 229, 232);
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  grid-area: side-bar;

  .logo {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    .business {
      font-weight: 00;
    }
  }

  .nav_list {
    .nav_item {
      position: relative;
      .isSelected {
        background-color: rgb(83, 83, 83);
        color: white;
        padding: 10px 0 10px 20px;
        border-radius: 20px;
      }
    }
  }
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgb(149, 153, 152);
  position: relative;
  transform: rotate(-15deg);
  margin: 0 1.5rem 0 0;

  &::after {
    content: "";
    width: 90%;
    height: 90%;
    background-color: rgb(83, 83, 83);
    position: absolute;
    right: -10%;
    bottom: -5%;
  }
`;

export const Navigation = styled.nav`
  width: 90%;
  margin: 0 auto;
  padding-top: 5rem;
`;

export const Link = styled.a`
  color: rgb(82, 86, 87);
  font-weight: 700;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0 10px 20px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  bottom: 2rem;
  position: absolute;
  .no-photo {
    width: 70px;
    height: 70px;
    background-color: rgb(196, 196, 196);
    border-radius: 50%;
  }
  .name {
    color: #5b5f5e;
    margin: 5px 0;
    font-size: 14px;
  }
  .email {
    font-size: 13px;
    color: #b7bbbe;
  }
`;
