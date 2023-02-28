import React, { useState, useEffect } from "react";
import "./TedTransferPage.css";



const TedTransferPage = () => {


  const [accounNumber, setAccountNumber] = useState("");
  const [value, setValue] = useState("");

  const tedFormularyValidation = (e) => {

    const accountNumberDanger = document.querySelector(".account-number-class");
    const valueDanger = document.querySelector(".value-class");

    if (accounNumber === "" && value === "") {
      e.preventDefault();
      accountNumberDanger.innerHTML = "O formulário do número de conta está vazio";
      valueDanger.innerHTML = "O formulário do valor de tranferência está vazio";
    } else if (accounNumber === "") {
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
      <form className="form-register user-panel-box">
        <div className="w-75 mx-auto">
          <div className="loading">
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>

          <h1 className="text-center mb-3">Banco Itaú</h1>

          <h4 className="text-center mb-3">Área do cliente -Transferência</h4>
          <h5 className="text-center mb-3 subtitle">TED</h5>
          <div className="mb-3 client-infos">
            <h6>Nome do Cliente</h6>
            <h6>Número da Conta</h6>
            <h6>Agência</h6>
            <h6>Saldo</h6>
          </div>

          <div className="mb-3">
            <label for="accountNumber" className="form-label">Conta</label>
            <input type="number" className="form-control" name="accountNumber" id="accountNumber" placeholder="Insira a conta que deseja fazer a tranferência" onChange={(e) => { setAccountNumber(e.target.value) }} />
            <div>
              <p className="danger account-number-class"></p>
            </div>

          </div>
          <div className="mb-3">
            <label for="value" className="form-label">Valor</label>
            <input type="number" name="value" className="form-control" id="value" placeholder="R$" step="0.01" min="0.01"
              onChange={(e) => { setValue(e.target.value) }} />
          </div>
          <div>
            <p className="danger value-class"></p>
          </div>

          <button type="submit" className="btn btn-primary w-100" onClick={tedFormularyValidation}>Transferir</button>

        </div>
      </form>
    </div>);
}


export default TedTransferPage;