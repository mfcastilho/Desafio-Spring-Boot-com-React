package com.banco.projeto.testeturing.DTO;

public class RequestDepositDTO {

	private int accountNumber;
	private Double value;
	
	
	public RequestDepositDTO(int accountNumber, Double value) {
		super();
		this.accountNumber = accountNumber;
		this.value = value;
	}


	public int getAccountNumber() {
		return accountNumber;
	}


	public Double getValue() {
		return value;
	}


	
	
	
	
}
