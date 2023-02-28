import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "./AuthPasswordPage.css";

const url_base = "http://localhost:8080";


const AuthPasswordPage = ()=>{

  const [password, setPassword] = useState("");

  const [user, setUser] = useState();

  
  useEffect(()=>{
    axios
      .post(`${url_base}/auth/login`)
      .then(res => console.log(res.data))
      .catch(err => console.error("Ocorreu um erro"+err));
  }, []);




  const passwordValidation  = (e)=>{
    const danger = document.querySelector(".danger");
           const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8}$/;
           if(password === ""){
              e.preventDefault();
              danger.innerHTML = "O campo do formulário está vazio!";
            }else if(!regex.exec(password)){
              e.preventDefault();
              danger.innerHTML = "A senha deve conter 8 dígitos, caracteres especiais, letras maiúsculas e minúsculas";
            }

          
  }
 

  return(<div className="container">
  <section className="form-login">
      <form className="w-75 mx-auto" action="http://localhost:8080/usuario" method="POST">
          <h1 className="text-center mb-3">Banco Itaú</h1>

          <div className="mb-3">
            <label htmlFor="password-login" className="form-label">Digite a sua senha</label>
            <input type="password" name="password" className="form-control" id="password-login" placeholder="********" value={password} onChange={(e)=>{ setPassword(e.target.value)}} />
          </div>
          <div>
            <p  className="danger"></p>
          </div>

          <button type="submit" className="btn btn-primary w-100" onClick={passwordValidation}>Acessar</button>
        </form>
      
  </section>


</div>);

}

export default AuthPasswordPage;