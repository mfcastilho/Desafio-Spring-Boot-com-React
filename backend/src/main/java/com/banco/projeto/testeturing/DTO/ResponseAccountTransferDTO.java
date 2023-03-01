package com.banco.projeto.testeturing.DTO;

import com.banco.projeto.testeturing.entities.Account;
import com.banco.projeto.testeturing.entities.User;

public class ResponseAccountTransferDTO {
	
private static final long serialVersionUID = 1L;
	
	private Long id;
	private User emissor;
    private int agenciaConta;
    private int numeroConta;
    private Double saldoConta;
    private Account receptor;
    
    
    public ResponseAccountTransferDTO() {
    	
    }

	public ResponseAccountTransferDTO(Long id, User titular, int agenciaConta, int numeroConta, Double saldoConta, Account receptor) {
		super();
		this.id = id;
		this.emissor = titular;
		this.agenciaConta = agenciaConta;
		this.numeroConta = numeroConta;
		this.saldoConta = saldoConta;
		this.receptor = receptor;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getEmissor() {
		return emissor;
	}

	public void setEmissor(User emissor) {
		this.emissor = emissor;
	}

	public int getAgenciaConta() {
		return agenciaConta;
	}

	public void setAgenciaConta(int agenciaConta) {
		this.agenciaConta = agenciaConta;
	}

	public int getNumeroConta() {
		return numeroConta;
	}

	public void setNumeroConta(int numeroConta) {
		this.numeroConta = numeroConta;
	}

	public Double getSaldoConta() {
		return saldoConta;
	}

	public void setSaldoConta(Double saldoConta) {
		this.saldoConta = saldoConta;
	}

	public Account getReceptor() {
		return receptor;
	}

	public void setReceptor(Account receptor) {
		this.receptor = receptor;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
	
	
}
