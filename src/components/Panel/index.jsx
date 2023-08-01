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
            <Loading />
            <Loading />
            <Loading />
        </div>
        <Card width={"100%"} height={'300px'}></Card>
      </PanelStyle>
    </>
  );
};
export default Panel;