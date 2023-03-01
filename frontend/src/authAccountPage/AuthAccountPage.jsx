
import "./AuthAccountPage.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const url_base = "http://localhost:8080";



const AuthAccountPage = () => {

  const [accountNumber, setAccountNumber] = useState("");
  const [error, setError] = useState('');
  const [cor] = useState('red');

  const navegate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      accountNumber: accountNumber
    };

    try {
      const response = await axios.post(url_base + "/conta", data);
      console.log(response.data);
      navegate("/password");
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  }




  //método de validação do formulário da conta
  const accountdValidation = (e) => {
    const danger = document.querySelector(".danger");
    if (accountNumber === "") {
      e.preventDefault();
      danger.innerHTML = "O campo do formulário está vazio!";
    } else {
      danger.innerHTML = "";
    }
  }


  return (
    <div className="container">
      <section className="form-login">
        <form onSubmit={handleSubmit}>
          <div>
            {error && <h3 style={{ color: cor }} className="show-msg">{error}</h3>}
          </div>
          <h1 className="text-center mb-3 title">Banco Itaú</h1>

          <div className="mb-3">
            <input type="number" className="form-control" name="accountNumber" id="accountNumber" value={accountNumber}
              onChange={event => setAccountNumber(event.target.value)} placeholder="Digite o número da sua conta" />
          </div>

          <div>
            <p className="danger"></p>
          </div>

          <button type="submit" className="btn btn-primary w-100 button" onClick={accountdValidation}>Acessar</button>
        </form>
      </section>
    </div>
  );

}

export default AuthAccountPage;