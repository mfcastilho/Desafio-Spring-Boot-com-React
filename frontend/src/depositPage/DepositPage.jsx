import "./DepositPage.css";
import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const url_base = "http://localhost:8080";

const DepositPage = () => {

  const [accountNumber, setAccountNumber] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState('');
  const [cor] = useState('red');


  const location = useLocation();
  const navigate = useNavigate();

  

  //método da requsição
  const handleSubmit = async (event) => {

    event.preventDefault();
    const data = {
      value: value,
      accountNumber: accountNumber
    };

    try {
      const response = await axios.post(url_base + "/conta/depositar", data);
      console.log(response.data);
      const obj = {
        name: response.data.titular.nomeCompleto,
        accountNumber: response.data.numeroConta,
        agency: response.data.agenciaConta,
        accountBalance: response.data.saldoConta
      }
      navigate("/userPanel", { state: { obj } });
    } catch (error) {
      setError(error.response.data);
      console.log(error);
    }
  }



  const formularyValidation = (e) => {

    const accountNumberDanger = document.querySelector(".account-number-class");
    const valueDanger = document.querySelector(".value-class");

    if (accountNumber === "" && value === "") {
      e.preventDefault();
      accountNumberDanger.innerHTML = "O formulário do número de conta está vazio";
      valueDanger.innerHTML = "O formulário do valor de tranferência está vazio";
    } else if (accountNumber === "") {
      e.preventDefault();
      accountNumberDanger.innerHTML = "O formulário do número de conta está vazio";
      valueDanger.innerHTML = ""
    } else if (value === "") {
      e.preventDefault();
      valueDanger.innerHTML = "O formulário do valor de tranferência está vazio";
      accountNumberDanger.innerHTML = "";
    }

  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-register user-panel-box">
      <div>
        {error && <h3 style={{ color: cor }} className="show-msg">{error}</h3>}
      </div>

        <div className="w-75 mx-auto">
          <div className="loading">
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>

          <h1 className="text-center mb-3">Banco Itaú</h1>

          <h4 className="text-center mb-3 subtitle">Área do cliente - Depósito</h4>
          <div className="mb-3 client-infos">
            <h6>Nome do Cliente:{location.state.obj.name}</h6>
            <h6>Número da Conta:{location.state.obj.accountNumber}</h6>
            <h6>Agência:{location.state.obj.agency}</h6>
            <h6>Saldo: {location.state.obj.accountBalance}</h6>
          </div>

          <div className="mb-3">
            <label htmlFor="accountNumber" className="form-label">Conta</label>
            <input type="text" className="form-control" name="accountNumber" id="accountNumber" placeholder="Insira a conta que deseja depositar" onChange={(e) => { setAccountNumber(e.target.value) }} />
          </div>

          <div>
              <p className="danger account-number-class"></p>
            </div>

          <div className="mb-3">
            <label htmlFor="value" className="form-label">Valor</label>
            <input type="number" name="value" className="form-control" id="value" placeholder="R$" step="0.01" min="0.01"
              onChange={(e) => { setValue(e.target.value) }} />
          </div>
           <div>
            <p className="danger value-class"></p>
          </div>

          <button type="submit" className="btn btn-primary w-100" onClick={formularyValidation}>Depositar</button>

        </div>
      </form>
    </div>);
}


export default DepositPage;