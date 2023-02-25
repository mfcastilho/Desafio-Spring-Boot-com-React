import React from "react";
import "./UserPanel.css";


const UserPanel = ()=>{

  return (
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
            
            <h1 class="text-center mb-3">Área do Cliente</h1>

            <div class="mb-3">
                <h6>Nome do Cliente</h6>
                <h6>Número da Conta</h6>
                <h6>Agência</h6>
            </div>

            
            <div class="btns-container">
              <a href="/userPanel/depositos" class="btn-actions">Depositar</a>
              <a href="/userPanel/saques" class="btn-actions">Sacar</a>
              <a href="/userPanel/transferencias" class="btn-actions">Transferências</a>
            </div>
            

          </div>
    </section>
  </div>);
}

export default UserPanel;