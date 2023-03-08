import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  NavBarContainer,
  NavBarLogo,
  Icon,
  Item,
  Link,
  NavBarList,
  NavBarListAct,
  DefaultColor,
} from "./style";
import {
  List,
  X,
  House,
  Gear,
  Notepad
} from "phosphor-react";

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
            <NavLink to="/catalog">
              <DefaultColor>
                <Notepad size={22} alt={"Skill Catalog"} />
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
