import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo-Neki.png";
import {
  NavBarContainer,
  NavBarLogo,
  Icon,
  Item,
  Link,
  NavBarList,
  NavBarListAct,
  LogoImg,
  DefaultColor
} from "./style";
import {
  List,
  X,
  House,
  SignOut,
  Notepad,
  User
} from "phosphor-react";
import api from "../../service/api";
import { getUserLocalStorage } from "../../context/authProvider/util";
import { useAuth } from "../../utils/useAuth";
import { toast } from "react-toastify";

export function Navbar() {
  const [menuClick, setMenuClick] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const user = getUserLocalStorage();

  const toggleMenuClick = () => {
    setMenuClick(!menuClick);
  };

  function handleSignout() {
    api
      .post("/auth/signout")
      .then(() => {
        localStorage.removeItem("user");
        navigate("/");
        toast.warning("Usuário deslogado");
      })
      .catch((error) => {
        if (error.message === "Failed to refresh token") {
          navigate("/login");
        }
      });
  }


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
            <NavLink to="/perfil">
              <DefaultColor>
                <User size={22} alt={"My abilities"} />
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
        {user == null ? (
           <Item>
           <Link>
             <NavLink to="/login">
               <DefaultColor>
                 <User size={22} alt={"LogIn"} />
               </DefaultColor>
             </NavLink>
           </Link>
         </Item>
        ) : (
          <Item>
            <Link>
              <NavLink to="/login">
                <DefaultColor>
                  <SignOut size={22} alt={"LogOut"} onClick={handleSignout} />
                </DefaultColor>
              </NavLink>
            </Link>
          </Item>
        )}
      </>
    );
  };

  return (
    <NavBarContainer>
      <NavBarLogo>
        <LogoImg src={logo} />{" "}
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
