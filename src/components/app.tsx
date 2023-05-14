import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../constant/routes";
import { authContext } from "../context/index.context";

const AppComponent = () => {
  const [logged, setLogged] = useState<boolean>(false);
  return (
    <authContext.Provider value={{ logged, setLogged }}>
      <RouterProvider router={router} />
    </authContext.Provider>
  );
};
export default AppComponent;
