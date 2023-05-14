import { useContext } from "react";
import { router } from "../../constant/routes";
import { authContext } from "../../context/index.context";
import { APP_ROUTE_PATH } from "../../enumeration/common.enum";
import "./style.css";

const HeaderComponent = () => {
  const { setLogged } = useContext(authContext);

  const handleLogoutUser = () => {
    localStorage.removeItem("token");
    setLogged && setLogged(false);
    router.navigate(APP_ROUTE_PATH.loginView);
  };

  return (
    <div className="header-component-header-wrapper">
      <div className="header-component-img-wrapper">S</div>
      <div className="header-component-profile-container">
        <div> Hi Saurabh</div>
        <div className="logout-btn" onClick={handleLogoutUser}>
          Logout
        </div>
      </div>
    </div>
  );
};
export default HeaderComponent;
