import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { HeaderDiv, HeaderNav, HeaderNavUl, HeaderNavLi, HeaderLink } from "../styled/header";
import Logo from "./Logo";

export default function Header() {
  const { userAuth } = useContext(AppContext);
  return (
    <HeaderDiv>
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
          <HeaderNavLi>{userAuth.auth ? <button>Apps</button> : <HeaderLink to="/login">Login</HeaderLink>}</HeaderNavLi>
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
