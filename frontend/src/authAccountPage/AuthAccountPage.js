import React from "react";
import "./AuthAccountPage.css";
import axios from "axios";

const url_base = "http://localhost:8080";



const AuthAccountPage = ()=>{

  // axios.get(`https://cors-anywhere.herokuapp.com/${url_base}/conta/67890`);

  // axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  // axios.get(`${url_base}/conta/67890`,{
  //   method: "GET",
  //   mode:"cors",
  //   headers:{
  //     "Content-Type": "apllication/json"
  //   }
  // })
  // .then((response) =>console.log("resposta da requisição = "+response))
  // .catch(error=> console.log("reqisição falhou"));

  axios.get(`${url_base}/conta/67890`,)
  .then((response) =>console.log("resposta da requisição = "+response))
  .catch(error=> console.log("reqisição falhou"));
  

 
  

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
  </div>);

}

export default AuthAccountPage;