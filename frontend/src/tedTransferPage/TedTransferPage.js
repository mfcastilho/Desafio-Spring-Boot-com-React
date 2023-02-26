import React from "react";
import "./TedTransferPage.css";



const TedTransferPage = ()=>{

  return(
  <div className="container">
    <section className="form-register user-panel-box">
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
            <input type="text" className="form-control" name="accountNumber" id="accountNumber" placeholder="Insira a conta que deseja depositar"/>
          </div>
            <div className="mb-3">
            <label for="password-login" className="form-label">Valor</label>
            <input type="number" name="value" className="form-control" id="value" placeholder="R$" step="0.01" min="0.01"/>
           </div>

            <button type="submit" className="btn btn-primary w-100">Depositar</button>
    
          </div>
      </section>
  </div>);
}


export default TedTransferPage;