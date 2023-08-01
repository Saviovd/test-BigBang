import Card from "../Card";
import Loading from "../Loading";
import { PanelStyle } from "./styles";

const Panel = () => {
  return (
    <>
      <PanelStyle className="panel">
        <Card></Card>
        <Card></Card>
        <div className="nav">
          <Loading width="10%" />
          <Loading width="10%" />
          <Loading width="10%" />
          <Loading width="10%" />
          <Loading width="10%" />
        </div>
        <Card width={"95%"} height={"240px"}></Card>
      </PanelStyle>
    </>
  );
};
export default Panel;
