import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { HeaderDiv, HeaderNav, HeaderNavUl, HeaderNavLi, HeaderLink, AppsButton } from "../styled/header";
import Logo from "./Logo";
import { GrApps } from "react-icons/gr";
import AppsModal from "./AppsModal";
import { handleConditionalView } from "../../context/appActions";

export default function Header() {
  const { userAuth, dispatch } = useContext(AppContext);
  return (
    <HeaderDiv>
      <AppsModal />
      <HeaderLink to="/">
        <Logo />
      </HeaderLink>
      {/* <HeaderNav>
        <HeaderNavUl>
          <HeaderNavLi>
            <HeaderLink to="/about">About</HeaderLink>
          </HeaderNavLi>
        </HeaderNavUl>
      </HeaderNav> */}
      <HeaderNav>
        <HeaderNavUl>
          <HeaderNavLi>
            {userAuth.auth ? (
              <AppsButton
                onClick={() => {
                  handleConditionalView("AppsModal", dispatch);
                }}
              >
                <GrApps color="#fff" />
              </AppsButton>
            ) : (
              <HeaderLink to="/login">Login</HeaderLink>
            )}
          </HeaderNavLi>
          {userAuth.auth && (
            <HeaderNavLi>
              <HeaderLink to="/account">Account</HeaderLink>
            </HeaderNavLi>
          )}
        </HeaderNavUl>
      </HeaderNav>
    </HeaderDiv>
  );
}
