import { useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import {
  NavBarContainer,
  NavBarLogo,
  Icon,
  Item,
  Link,
  NavBarList,
  NavBarListAct,
  LogoImg,
  DefaultColor,
} from "./style";
import {
  List,
  X,
  User,
  SignOut,
  House,
  ForkKnife,
  Gear,
} from "phosphor-react";
import { toast } from "react-toastify";

export function Navbar() {
  const [menuClick, setMenuClick] = useState(false);

  const toggleMenuClick = () => {
    setMenuClick(!menuClick);
  };


  const ListLinks = () => {
    return (
      <>
        <Item>
          <Link>
            <NavLink to="/">
              <DefaultColor>
                <House size={22} alt={"Home Page"} />
              </DefaultColor>
            </NavLink>
          </Link>
        </Item>
        <Item>
          <Link>
            <NavLink to="/products">
              <DefaultColor>
                <ForkKnife size={22} alt={"Catalog"} />
              </DefaultColor>
            </NavLink>
          </Link>
        </Item>
        <Item>
          <Link>
            <NavLink to="/config">
              <DefaultColor>
                <Gear size={22} alt={"Config"} />
              </DefaultColor>
            </NavLink>
          </Link>
        </Item>
      </>
    );
  };

  return (
    <NavBarContainer>
      <NavBarLogo>
        Neki Logo
        {/* <LogoImg src={#} />{" "} */}
      </NavBarLogo>

      {menuClick ? (
        <Icon>
          <X onClick={toggleMenuClick} size={30} />
        </Icon>
      ) : (
        <Icon>
          <List onClick={toggleMenuClick} size={30} />
        </Icon>
      )}
      {menuClick ? (
        <NavBarListAct>
          {(() => {
            return <ListLinks />;
          })()}
        </NavBarListAct>
      ) : (
        <NavBarList>
          {(() => {
            return <ListLinks />;
          })()}
        </NavBarList>
      )}
    </NavBarContainer>
  );
}
