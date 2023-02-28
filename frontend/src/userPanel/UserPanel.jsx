import React from "react";
import "./UserPanel.css";


const UserPanel = ()=>{

  return (
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

            <h4 className="text-center mb-3 subtitle">Área do cliente</h4>
            <div className="mb-3 client-infos">
                <h6>Nome do Cliente</h6>
                <h6>Número da Conta</h6>
                <h6>Agência</h6>
                <h6>Saldo</h6>
            </div>

            
            <div className="btns-container">
              <a href="/userPanel/depositos" className="btn-actions">Depositar</a>
              <a href="/userPanel/saques" className="btn-actions">Sacar</a>
              <a href="/userPanel/transferencias" className="btn-actions">Transferências</a>
            </div>
            

          </div>
    </section>
  </div>);
}

export default UserPanel;