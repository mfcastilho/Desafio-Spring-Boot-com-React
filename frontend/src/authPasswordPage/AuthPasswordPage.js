import React, {useState} from "react";
import "./AuthPasswordPage.css";

const AuthPasswordPage = ()=>{

  const [password, setPassword] = useState("");

  const passwordValidation  = (e)=>{
    const danger = document.querySelector(".danger");
           const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8}$/;
           if(password === ""){
              e.preventDefault();
              danger.innerHTML = "O campo do formulário está vazio!";
            }else if(!regex.exec(password)){
              e.preventDefault();
              danger.innerHTML = "A senha deve conter 8 dígitos, caracteres especiais, letras maiúsculas e minúsculas";
            }
  }
 

  return(<div class="container">
  <section class="form-login">
      <form class="w-75 mx-auto" action="/login" method="POST">
          <h1 class="text-center mb-3">Banco Itaú</h1>

          <div class="mb-3">
            <label for="password-login" class="form-label">Digite a sua senha</label>
            <input type="password" name="password" class="form-control" id="password-login" placeholder="********" value={password} onChange={(e)=>{ setPassword(e.target.value)}} />
          </div>
          <div>
            <p  className="danger"></p>
          </div>

          <button type="submit" class="btn btn-primary w-100" onClick={passwordValidation}>Acessar</button>
        </form>
  </section>
</div>);

}

export default AuthPasswordPage;