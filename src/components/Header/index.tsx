import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { HeaderNav, HeaderNavUl, HeaderNavLi, HeaderLink } from "../styled/header";
import Logo from "./Logo";
import { GrApps } from "react-icons/gr";
import AppsModal from "./AppsModal";
import { handleConditionalView } from "../../context/appActions";
import { Link } from "react-router-dom";

export default function Header() {
  const { userAuth, dispatch } = useContext(AppContext);
  return (
    <div className="flex mx-auto w-full md:w-9/12 p-1 justify-between items-center h-[50px]">
      <AppsModal />
      <HeaderLink to="/">
        <Logo />
      </HeaderLink>
      <HeaderNav>
        <HeaderNavUl>
          <HeaderNavLi>
            {userAuth.auth ? (
              <button
                className="w-[40px] grid place-items-center h-[40px]"
                onClick={() => {
                  handleConditionalView("AppsModal", dispatch);
                }}
              >
                <GrApps className=" first:stroke-white stroke-white  text-2xl text-white" color="#fff" />
              </button>
            ) : (
              <HeaderLink to="/login">Login</HeaderLink>
            )}
          </HeaderNavLi>
          {userAuth.auth && (
            <HeaderNavLi>
              <Link to="/account">
                <img width={40} height={40} className={"rounded-full bg-gray-900"} />
              </Link>
            </HeaderNavLi>
          )}
        </HeaderNavUl>
      </HeaderNav>
    </div>
  );
}
