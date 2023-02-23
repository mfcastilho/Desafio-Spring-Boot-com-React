package com.banco.projeto.testeturing.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nomeCompleto;
	private String cpf;
	private String email;
	private String senha;
	//private static final String PASSWORD_REGEX = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8}$";
	
	public User() {
		
	}

	public User(Long id, String nomeCompleto, String cpf, String email, String senha) {
		
		/*if (!autenticandoSenha(senha)){
            System.out.println("Não foi possível realizar o cadastramento do usuário");
            return;
        }*/
		
		
		this.id = id;
		this.nomeCompleto = nomeCompleto;
		this.cpf = cpf;
		this.email = email;
		this.senha = senha;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public Long getId() {
		return id;
	}

	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public String getCpf() {
		return cpf;
	}	
	
	/*public Boolean autenticandoSenha(String senha){

	        Boolean resp = senha.matches(PASSWORD_REGEX);

	        if(!resp){
	            System.out.println("A senha deve conter 8 dígitos, caracteres especiais, letras maiúsculas e minúsculas");
	            return false;
	        }

	        return true;
	    }*/
}
