import { Link, Logo, Navigation, SideBarStyle, User } from "./styles";
import { useNavigation } from '../../contexts/navigationContext';
import data from "../../data/data.json";
import Notification from "../Notification";

const { navigation, notifications, user } = data;

const SideBar = () => {
  const { selectedItem, setSelectedItem } = useNavigation();

  return (
    <SideBarStyle className="side-bar">
      <div className="logo">
        <Logo></Logo>
        <h3 className="business">BigDashboard</h3>
      </div>
      <Navigation>
        <ul className="nav_list">
          {navigation.map((item, i) => (
            <li key={`${i}_${item.name}`} className="nav_item">
              <Link
                className={selectedItem === item.title ? "isSelected" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedItem(item.title);
                }}
                href={item.url}
              >
                {item.title}
              </Link>
              {item.title === "Notificações" ? (
                <Notification number={notifications.length} />
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </Navigation>
      <User>
        {user.photo 
          ? <img src={user.photo} alt={`Photo de ${user.name}`} /> 
          : <div className="no-photo"></div>
        }
        <h4 className="name">{user.name}</h4>
        <span className="email">{user.email}</span>
      </User>
    </SideBarStyle>
  );
};

export default SideBar;
