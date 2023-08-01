import { Link, Logo, Navigation, SideBarStyle, User } from "./styles";
import data from "../../data/data.json";
import { useState } from "react";
import Notification from "../Notification";

const { navigation, notifications, user } = data;

const SideBar = () => {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <SideBarStyle>
      <div className="logo">
        <Logo></Logo>
        <h3 className="business">BigDashboard</h3>
      </div>
      <Navigation>
        <ul className="nav_list">
          {navigation.map((item, i) => (
            <li key={`${i}_${item.name}`} className="nav_item">
              <Link
                className={isSelected === i ? "isSelected" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setIsSelected(i);
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
