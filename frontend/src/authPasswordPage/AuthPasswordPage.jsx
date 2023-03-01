import "./AuthPasswordPage.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url_base = "http://localhost:8080";


const AuthPasswordPage = (props) => {

  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //método da requsição
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      password: password
    };

    try {
      const response = await axios.post(url_base + "/usuario/login", data);
      console.log(response.data);
      const obj = {
        name: response.data.titular.nomeCompleto,
        accountNumber: response.data.numeroConta,
        agency: response.data.agenciaConta,
        accountBalance: response.data.saldoConta
      }
      navigate("/userPanel", { state: { obj } });
    } catch (error) {
      console.log(error)
    }
  }



  //método de validação do fromulário de senha
  const passwordValidation = (e) => {
    const danger = document.querySelector(".danger");
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8}$/;
    if (password === "") {
      e.preventDefault();
      danger.innerHTML = "O campo do formulário está vazio!";
    } else if (!regex.exec(password)) {
      e.preventDefault();
      danger.innerHTML = "A senha deve conter 8 dígitos, caracteres especiais, letras maiúsculas e minúsculas";
    }
  }


  return (
  <div className="container">
    <section className="form-login">
      <form className="w-75 mx-auto" onSubmit={handleSubmit}>
        <h1 className="text-center mb-3">Banco Itaú</h1>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Digite a sua senha</label>
          <input type="password" name="password" className="form-control" id="password" placeholder="********" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </div>

        <div>
          <p className="danger"></p>
        </div>

        <button type="submit" className="btn btn-primary w-100" onClick={passwordValidation}>Acessar</button>
      </form>
    </section>
  </div>
  );

}

export default AuthPasswordPage;