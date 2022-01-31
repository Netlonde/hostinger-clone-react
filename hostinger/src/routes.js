import React, {useContext} from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ForgotPage from "./pages/ForgotPage";

import { Context } from "./store/AuthContext";

function AppRoutes(){

  function Private({children}){
    const {authenticated, loading} = useContext(Context);

    if(loading) return (<h1> </h1>)

    if(!authenticated) return <Navigate to="login" />

    return children;
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/" element={<Private><HomePage /></Private>} />
        <Route exact path="/redefinir-senha" element={<ForgotPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
