import React from "react";


const TransferPage = ()=>{

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

            <h4 className="text-center mb-3 subtitle">Área do cliente - Transferências</h4>
            <div className="mb-3 client-infos">
                <h6>Nome do Cliente</h6>
                <h6>Número da Conta</h6>
                <h6>Agência</h6>
                <h6>Saldo</h6>
            </div>

            <div className="btns-container">
              <a href="/userPanel/transferencias/pix" className="btn-actions">PIX</a>
              <a href="/userPanel/transferencias/ted" className="btn-actions">TED</a>
              <a href="/userPanel/transferencias/doc" className="btn-actions">DOC</a>
            </div>
    
          </div>
      </section>
    </div>
  );
}

export default TransferPage;