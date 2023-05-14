import { Dispatch, SetStateAction } from "react";

export interface loginContextVariable {
  logged?: boolean;
  setLogged?: Dispatch<SetStateAction<boolean>>;
}
