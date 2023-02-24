package com.banco.projeto.testeturing.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.banco.projeto.testeturing.DTO.AccountDTO;

@Entity
@Table(name = "tb_conta")
public class Account {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "usuario_id")	
    private User titular;
    private int agenciaConta;
    private int numeroConta;
    private Double saldoConta;
  


    //Construtores
    public Account(Long id, User titular, int agenciaConta, int numeroConta, Double saldoInicial) {
        this.id = id;
    	this.titular = titular;
        this.agenciaConta = agenciaConta;
        this.numeroConta = numeroConta;
        this.saldoConta = saldoInicial;
      
    }
    
    public Account(AccountDTO accountDto) {
        this.id = accountDto.getId();
    	this.titular = accountDto.getTitular();
        this.agenciaConta = accountDto.getAgenciaConta();
        this.numeroConta = accountDto.getNumeroConta();
        this.saldoConta = accountDto.getSaldoConta();
      
    }

  public Account() {
	  
  }

    //Getters

    public User getTitular() {
        return titular;
    }

    public Long getId() {
		return id;
	}

	public int getAgenciaConta() {
        return agenciaConta;
    }

    public int getNumeroConta() {
        return numeroConta;
    }

    public Double getSaldoConta() {
        return saldoConta;
    }
    
    public void setSaldoConta(Double saldoConta) {
		
		this.saldoConta = saldoConta;
	}

   

}
