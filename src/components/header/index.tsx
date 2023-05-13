import { router } from "../../constant/routes";
import { APP_ROUTE_PATH } from "../../enumeration/common.enum";
import "./style.css";

const HeaderComponent = () => {
  const handleLogoutUser = () => {
    router.navigate(APP_ROUTE_PATH.loginView);
    alert("Logout Successfully");
  };
  return (
    <div className="header-component-header-wrapper">
      <div className="header-component-img-wrapper">
        <img />
      </div>
      <div className="header-component-profile-container">
        <div> Hi Rahul</div>
        <div className="logout-btn" onClick={handleLogoutUser}>
          Logout
        </div>
      </div>
    </div>
  );
};
export default HeaderComponent;
