
import "./AuthAccountPage.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const url_base = "http://localhost:8080";



const AuthAccountPage = ()=>{

  

  useEffect(()=>{
    axios.get(url_base+"/conta/67890")
    .then((response) => console.log(response.data))
    .catch("exibo um erro na tela")
  },[])



 
  

  return(
  <div className="container">
    <section className="form-login">
      <form >
          <h1 className="text-center mb-3 title">Banco Itaú</h1>

          <div className="mb-3">
            {/* <label for="conta" className="form-label">Digite o número da sua conta</label> */}
            <input type="number" className="form-control" name="conta" id="conta" placeholder="Digite o número da sua conta" />
          </div>
          
          <button type="submit" className="btn btn-primary w-100 button">Acessar</button>
        </form>
    </section>
  </div>
  );

}

export default AuthAccountPage;