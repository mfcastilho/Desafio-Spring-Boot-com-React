import React from "react";



const WithdrawPage = ()=>{

  return(
    <div class="container">
      <section class="form-login">
        <form class="w-75 mx-auto" action="/login" method="POST">
          <h1 class="text-center mb-3">Login</h1>

          <div class="mb-3">
            <label for="conta" class="form-label">Conta</label>
            <input type="email" class="form-control" name="conta" id="conta"/>
          </div>

          <div class="mb-3">
            <label for="password-login" class="form-label">Senha</label>
            <input type="password" name="password" class="form-control" id="password-login" placeholder="********"/>
          </div>

       

          <div class="mb-3 form-check d-flex justify-content-between flex-wrap">
              <div class="mb-2">
                  <input type="checkbox" class="form-check-input" name="keep_connected" id="auto-login"/>
                  <label class="form-check-label" for="auto-login">Manter conectado?</label>
              </div>

              <a href="/cadastro" title="Não tem uma conta? Clique aqui e cadastre-se">Não tem uma conta? Clique aqui e cadastre-se</a>

          </div>

          <button type="submit" class="btn btn-primary w-100">Entrar</button>
        </form>
      </section>
    </div>
  );
}


export default WithdrawPage;