import { HeaderStyle } from "./styles";
import { useNavigation } from "../../contexts/navigationContext";
import { FaSearch, FaRegBookmark } from "react-icons/fa";

const Header = () => {
  const { selectedItem } = useNavigation();
  return (
    <>
      <HeaderStyle className="header">
        <div className="current-session">
          <h2 className="title">{selectedItem}</h2>
          <span className="subtitle">As últimas atualizações de hoje</span>
        </div>
        <div className="icons">
          <div className="icon-box">
            <FaSearch className="icon" />
          </div>
          <div className="icon-box">
            <FaRegBookmark className="icon" />
          </div>
        </div>
      </HeaderStyle>
    </>
  );
};

export default Header;
