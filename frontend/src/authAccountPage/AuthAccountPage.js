import React from "react";
import "./AuthAccountPage.css";

const AuthAccountPage = ()=>{

 
  

  return(<div class="container">
  <section class="form-login">
      <form class="w-75 mx-auto" action="/conta" method="GET">
          <h1 class="text-center mb-3 title">Banco Itaú</h1>

          <div class="mb-3">
            {/* <label for="conta" class="form-label">Digite o número da sua conta</label> */}
            <input type="number" class="form-control" name="conta" id="conta" placeholder="Digite o número da sua conta" />
          </div>
          
          <button type="submit" class="btn btn-primary w-100 button">Acessar</button>
        </form>
  </section>
</div>);

}

export default AuthAccountPage;