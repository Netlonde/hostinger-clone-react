import React, {createContext} from "react";

import useAuth from "./hooks/useAuth";

const Context = createContext();

function AuthProvider({ children }){
  const {login, logout, email, setEmail, password, setPassword,
         setUser, loading, authenticated, modalClose, setModalClose,
         config, setConfig,modalOptionsClose, setmodalOptionsClose,
         monthsValue, setMonthsValue, showLinks, setShowLinks} = useAuth();

  return(
    <Context.Provider value={{login, logout, email, setEmail,
                              password, setPassword, setUser,
                              loading, authenticated, modalClose, setModalClose,
                              config, setConfig, modalOptionsClose, setmodalOptionsClose,
                              monthsValue, setMonthsValue, showLinks, setShowLinks}}>
      {children}
    </Context.Provider>
  )
}

export {Context, AuthProvider};
