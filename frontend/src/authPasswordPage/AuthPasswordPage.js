import React from "react";
import "./AuthPasswordPage.css";

const AuthPasswordPage = ()=>{
  return(<div class="container">
  <section class="form-login">
      <form class="w-75 mx-auto" action="/login" method="POST">
          <h1 class="text-center mb-3">Banco Itaú</h1>

          <div class="mb-3">
            <label for="password-login" class="form-label">Digite a sua senha</label>
            <input type="password" name="password" class="form-control" id="password-login" placeholder="********" />
          </div>

          <button type="submit" class="btn btn-primary w-100">Acessar</button>
        </form>
  </section>
</div>);

}

export default AuthPasswordPage;