import { Fragment, useContext, useEffect, useState } from "react";
import { router } from "../../constant/routes";
import { login } from "../../constant/temp";
import { authContext } from "../../context/index.context";
import { APP_ROUTE_PATH } from "../../enumeration/common.enum";
import "./style.css";

const LoginPage = () => {
  const [value, setValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setLogged } = useContext(authContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogged && setLogged(true);
      router.navigate(APP_ROUTE_PATH.dashboardView);
    }
  }, []);

  const handleLogin = () => {
    if (value === login.name && password === login.password) {
      localStorage.setItem("token", login.token);
      setLogged && setLogged(true);
      router.navigate(APP_ROUTE_PATH.dashboardView);
    } else {
      alert("User is not found");
      router.navigate(APP_ROUTE_PATH.loginView);
    }
  };

  return (
    <Fragment>
      <div className="login-wrapper">
        <div>Login To Get Access</div>
        <div>Note: Username : saurabh, Password: 123</div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="User name"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="User Password"
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </Fragment>
  );
};
export default LoginPage;
