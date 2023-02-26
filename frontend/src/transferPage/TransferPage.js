import React from "react";


const TransferPage = ()=>{

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
            
            <h1 class="text-center mb-3">Banco Itaú</h1>

            <h4 class="text-center mb-3 subtitle">Área do cliente - Transferências</h4>
            <div class="mb-3 client-infos">
                <h6>Nome do Cliente</h6>
                <h6>Número da Conta</h6>
                <h6>Agência</h6>
            </div>

            <div class="btns-container">
              <a href="/userPanel/depositos" class="btn-actions">PIX</a>
              <a href="/userPanel/saques" class="btn-actions">TED</a>
              <a href="/userPanel/transferencias" class="btn-actions">DOC</a>
            </div>
    
          </div>
      </section>
    </div>
  );
}

export default TransferPage;