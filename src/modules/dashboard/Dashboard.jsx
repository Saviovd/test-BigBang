import { DashBoardStyle } from "./styles";
import SideBar from '../../components/SideBar'
import Header from '../../components/Header'
import Panel from "../../components/Panel";
import Tasks from "../../components/Tasks";

const DashBoard = () => {
  return (
    <>
      <DashBoardStyle>
        <SideBar />
        <Header />
        <Panel />
        <Tasks />
      </DashBoardStyle>
    </>
  );
};

export default DashBoard;
