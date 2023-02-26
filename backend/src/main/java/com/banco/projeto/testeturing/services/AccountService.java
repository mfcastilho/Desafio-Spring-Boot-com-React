package com.banco.projeto.testeturing.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.security.sasl.AuthenticationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banco.projeto.testeturing.DTO.AccountDTO;
import com.banco.projeto.testeturing.entities.Account;
import com.banco.projeto.testeturing.exceptions.BusinessRulesException;
import com.banco.projeto.testeturing.repositories.AccountRepository;

@Service
public class AccountService {

	@Autowired
	private AccountRepository repository;

	public List<AccountDTO> findAll() {
		List<Account> list = repository.findAll();
		List<AccountDTO> listAccountDTO = new ArrayList<>();

		for (Account account : list) {
			listAccountDTO.add(new AccountDTO(account));
		}

		return listAccountDTO;
	}

	public int accountValidation(int account) {
		int userId = repository.findUserIdByAccount(account);
		
		return userId;
	}

	public Double deposit(Double value, int accountNumber) {

		Account account = repository.findUserAccountByAccountNumber(accountNumber);
	
		System.out.println(account);
		if (value <= 0) {
			throw new BusinessRulesException("Valor de depósito inválido");
		}

		account.setSaldoConta(account.getSaldoConta() + value);
		
		repository.save(account);

		return account.getSaldoConta();

	}
	
	public Double withDraw(Double value, int accountNumber) {
		Account account = repository.findUserAccountByAccountNumber(accountNumber);
		
		if(value <= 0) {
			throw new BusinessRulesException("Valor de saque inválido!");
		}
		
		if(value > account.getSaldoConta()) {
			throw new BusinessRulesException("Saldo insuficiente");
		}
		
		account.setSaldoConta(account.getSaldoConta() - value);
		
		repository.save(account);
		
		return account.getSaldoConta();
	}

}
