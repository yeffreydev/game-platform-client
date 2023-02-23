import { useContext } from "react";
import { removeUserAuth } from "../../context/appActions";
import AppContext from "../../context/AppContext";
import { removeUserTokenFromLocalStorage } from "../../utils/auth";

export default function Account() {
  const { dispatch } = useContext(AppContext);
  const handleLogout = () => {
    removeUserTokenFromLocalStorage();
    removeUserAuth(dispatch);
    window.location.href = "/";
  };
  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}
