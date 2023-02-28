package com.banco.projeto.testeturing.DTO;

public class UserRequestByPasswordDTO {

	private String password;
	
	
	public UserRequestByPasswordDTO(String password) {
		this.password = password;
	}
	
	public UserRequestByPasswordDTO() {
		
	}


	public String getPassword() {
		return password;
	}

	
}
