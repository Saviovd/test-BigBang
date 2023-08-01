import { DashBoardStyle } from "./styles";
import SideBar from '../../components/SideBar'
import Header from '../../components/Header'
import Panel from "../../components/Panel";

const DashBoard = () => {
  return (
    <>
      <DashBoardStyle>
        <SideBar />
        <Header />
        <Panel />
      </DashBoardStyle>
    </>
  );
};

export default DashBoard;
