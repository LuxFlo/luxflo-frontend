export const initialState = {
  authLoading: false,
  authRedirect: "",
  auth: false,
  adminLoading: false,
  adminRedirect: "",
  admin: false,
  // network: "mainnet",
  network: "testnet",
};

export type Action =
  | {
      type: "init_stored";
      payload: {
        auth: boolean;
        authLoading: boolean;
        authRedirect: string;
        admin: boolean;
        adminLoading: boolean;
        adminRedirect: string;
        network: string;
      };
    }
  | {
      type: "set_auth";
      payload: {
        authLoading: boolean;
        authRedirect: string;
        auth: boolean;
      };
    }
  | {
      type: "set_admin";
      payload: {
        adminLoading: boolean;
        adminRedirect: string;
        admin: boolean;
      };
    }
  | {
      type: "set_network";
      payload: {
        network: string;
      };
    };

export const AppReducer = (
  state: {
    auth: boolean;
    authLoading: boolean;
    authRedirect: string;
    admin: boolean;
    adminLoading: boolean;
    adminRedirect: string;
    network: string;
  },
  action: Action
) => {
  switch (action.type) {
    case "init_stored": {
      return action.payload;
    }

    case "set_auth": {
      return {
        ...state,
        authLoading: action.payload.authLoading,
        authRedirect: action.payload.authRedirect,
        auth: action.payload.auth,
      };
    }

    case "set_network": {
      return {
        ...state,
        network: action.payload.network,
      };
    }

    case "set_admin": {
      return {
        ...state,
        adminLoading: action.payload.adminLoading,
        adminRedirect: action.payload.adminRedirect,
        admin: action.payload.admin,
      };
    }
  }
};
