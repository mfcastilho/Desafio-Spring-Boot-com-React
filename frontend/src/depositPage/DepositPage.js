import React from "react";
import "./DepositPage.css";



const DepositPage = ()=>{

  return(
  <div class="container">
    <section class="form-register user-panel-box">
        <div class="w-75 mx-auto">
            <div class="loading">
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
            
            <h1 class="text-center mb-3">Banco Itaú</h1>

            <h4 class="text-center mb-3 subtitle">Área do cliente - Depósito</h4>
            <div class="mb-3 client-infos">
                <h6>Nome do Cliente</h6>
                <h6>Número da Conta</h6>
                <h6>Agência</h6>
            </div>

            <div class="mb-3">
            <label for="accountNumber" class="form-label">Conta</label>
            <input type="text" class="form-control" name="accountNumber" id="accountNumber" placeholder="Insira a conta que deseja depositar"/>
          </div>
            <div class="mb-3">
            <label for="password-login" class="form-label">Valor</label>
            <input type="number" name="value" class="form-control" id="value" placeholder="R$" step="0.01" min="0.01"/>
           </div>

            <button type="submit" className="btn btn-primary w-100">Depositar</button>
    
          </div>
      </section>
  </div>);
}


export default DepositPage;