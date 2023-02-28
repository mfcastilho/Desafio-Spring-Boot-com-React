import React from "react";



const WithdrawPage = () => {

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

          <h4 className="text-center mb-3 subtitle">Área do cliente - Saque</h4>
          <div className="mb-3 client-infos">
            <h6>Nome do Cliente</h6>
            <h6>Número da Conta</h6>
            <h6>Agência</h6>
            <h6>Saldo</h6>
          </div>

          <div className="mb-3">
            <label for="password-login" className="form-label">Digite o valor a ser sacado da conta</label>
            <input type="number" name="value" className="form-control" id="value" placeholder="R$" step="0.01" min="0.01" />
          </div>

          <button type="submit" className="btn btn-primary w-100">Sacar</button>

        </div>
      </form>
    </div>



  );
}


export default WithdrawPage;