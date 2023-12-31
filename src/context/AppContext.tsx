import {
  createContext,
  useContext,
  useMemo,
  ReactNode,
  useReducer,
  Dispatch,
  useEffect,
} from "react";

import { Action, AppReducer, initialState } from "./AppReducer";

type Props = {
  children: ReactNode;
};

//
type appContextType = {
  state: {
    auth: boolean;
    authLoading: boolean;
    authRedirect: string;
    admin: boolean;
    adminLoading: boolean;
    adminRedirect: string;
    network: string;
  };
  dispatch: Dispatch<Action>;
};

const appContextDefaultValues: appContextType = {
  state: {
    auth: false,
    authLoading: false,
    authRedirect: "",
    admin: false,
    adminLoading: false,
    adminRedirect: "",
    // network: "mainnet",
    network: "localhost",
  },
  dispatch: () => {},
};
//

const AppContext = createContext<appContextType>(appContextDefaultValues);

export function AppWrapper({ children }: Props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  useEffect(() => {
    console.log("AppContext useEffect #1");
    console.log(
      "AppContext useEffect #1",
      JSON.parse(localStorage.getItem("state")!)
    );
    if (localStorage.getItem("state")) {
      dispatch({
        type: "init_stored",
        payload: JSON.parse(localStorage.getItem("state")!),
      });
    }
  }, []);
  useEffect(() => {
    console.log("AppContext useEffect #2");
    if (state !== initialState) {
      localStorage.setItem("state", JSON.stringify(state));
    }
  }, [state]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
