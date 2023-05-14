import { createContext } from "react";
import { loginContextVariable } from "../components/login/interface";

export const authContext = createContext<loginContextVariable>({});
