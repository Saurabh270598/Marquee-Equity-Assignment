import { Fragment, useState } from "react";
import { router } from "../../constant/routes";
import { login } from "../../constant/temp";
import { APP_ROUTE_PATH } from "../../enumeration/common.enum";
import DashboardComponent from "../dashboard";
import "./style.css";

const LoginPage = () => {
  const [value, setValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showDashboard, setShowdashboard] = useState<boolean>(false);
  const handleLogin = () => {
    if (value === login.name && password === login.password) {
      setShowdashboard(true);
    }
  };
  {
    showDashboard
      ? router.navigate(APP_ROUTE_PATH.dashboardView)
      : router.navigate(APP_ROUTE_PATH.loginView);
  }

  return (
    <Fragment>
      <div className="login-wrapper">
        <div>Login To Get Access</div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </Fragment>
  );
};
export default LoginPage;
