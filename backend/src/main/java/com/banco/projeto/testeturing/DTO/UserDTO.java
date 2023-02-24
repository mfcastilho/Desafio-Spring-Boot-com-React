package com.banco.projeto.testeturing.DTO;

import com.banco.projeto.testeturing.entities.User;

public class UserDTO {

	private Long id;
	private String nomeCompleto;
	private String cpf;
	private String email;
	private String senha;
	
	public UserDTO() {
		
	}

	public UserDTO(Long id, String nomeCompleto, String cpf, String email, String senha) {
		super();
		this.id = id;
		this.nomeCompleto = nomeCompleto;
		this.cpf = cpf;
		this.email = email;
		this.senha = senha;
	}
	
	public UserDTO(User user) {
		this.id = user.getId();
		this.nomeCompleto = user.getNomeCompleto();
		this.cpf = user.getCpf();
		this.email =user.getEmail();
		this.senha = user.getSenha();
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
}
