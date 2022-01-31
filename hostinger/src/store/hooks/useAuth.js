import {useState, useEffect} from "react";

import api from "../../services/api";

function useAuth(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalClose, setModalClose] = useState(false);
  const [modalOptionsClose, setmodalOptionsClose] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [monthsValue, setMonthsValue] = useState({
    months: 1,
    value: 0
  });
  const [config, setConfig] = useState({
    title: "",
    value: 0
  });


  useEffect(()=>{
    const token =  localStorage.getItem("token");

    if(token){
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function login(){
    try{
      const {data} = await api.post("/login", {email,password});

      localStorage.setItem("token", JSON.stringify(data.token));

      api.defaults.headers.Authorization = `Bearer ${data.token}`;

      setAuthenticated(true);
    }catch{
      setAuthenticated(false);
    }

  }

  function logout(){
    localStorage.removeItem("token");
    setModalClose(false);
    setAuthenticated(false);
  }

  return {login, logout, email, setEmail, password,
          setPassword, loading, authenticated,
          modalClose, setModalClose, config, setConfig,
          modalOptionsClose, setmodalOptionsClose,
          monthsValue, setMonthsValue,
          showLinks, setShowLinks};
}


export default useAuth;
