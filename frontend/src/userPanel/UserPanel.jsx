import "./UserPanel.css";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";



const UserPanel = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const passingDatasToDepositRoute = () => {

    const obj = {
      name: location.state.obj.name,
      accountNumber: location.state.obj.accountNumber,
      agency: location.state.obj.agency,
      accountBalance: location.state.obj.accountBalance
    }

    navigate("/userPanel/depositos", { state: { obj } });

  }

  const passingDatasToWithDrawRoute = () => {

    const obj = {
      name: location.state.obj.name,
      accountNumber: location.state.obj.accountNumber,
      agency: location.state.obj.agency,
      accountBalance: location.state.obj.accountBalance
    }

    navigate("/userPanel/saques", { state: { obj } });

  }

  const passingDatasToTransfersRoute = () => {

    const obj = {
      name: location.state.obj.name,
      accountNumber: location.state.obj.accountNumber,
      agency: location.state.obj.agency,
      accountBalance: location.state.obj.accountBalance
    }

    navigate("/userPanel/transferencias", { state: { obj } });

  }



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
            <h6>Nome do Cliente:{location.state.obj.name}</h6>
            <h6>Número da Conta:{location.state.obj.accountNumber}</h6>
            <h6>Agência:{location.state.obj.agency}</h6>
            <h6>Saldo: {location.state.obj.accountBalance}</h6>
          </div>


          <div className="btns-container">
            <div onClick={passingDatasToDepositRoute} className="btn-actions">Depositar</div>
            <div onClick={passingDatasToWithDrawRoute} className="btn-actions">Sacar</div>
            <div onClick={passingDatasToTransfersRoute} className="btn-actions">Transferências</div>
          </div>


        </div>
      </section>
    </div>);
}

export default UserPanel;