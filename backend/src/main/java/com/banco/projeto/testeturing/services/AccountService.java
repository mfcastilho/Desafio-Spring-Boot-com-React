package com.banco.projeto.testeturing.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banco.projeto.testeturing.DTO.AccountDTO;
import com.banco.projeto.testeturing.DTO.ResponseAccountTransferDTO;
import com.banco.projeto.testeturing.entities.Account;
import com.banco.projeto.testeturing.exceptions.AuthenticationException;
import com.banco.projeto.testeturing.exceptions.BusinessRulesException;
import com.banco.projeto.testeturing.repositories.AccountRepository;

@Service
public class AccountService {

	@Autowired
	private AccountRepository repository;

	// Pega todas as contas cadastradas no banco de dados
	public List<AccountDTO> findAll() {
		List<Account> list = repository.findAll();
		List<AccountDTO> listAccountDTO = new ArrayList<>();

		for (Account account : list) {
			listAccountDTO.add(new AccountDTO(account));
		}

		return listAccountDTO;
	}

	
	public AccountDTO getUserAccountByUserId(Long userId) {
		
		Account account =repository.findUserAccountByUserId(userId);
		
		System.out.println("---aqui---");
		System.out.println(account);
		
		if(account == null) {
			throw new AuthenticationException("A conta não foi encontrada");
			
		}
		AccountDTO accountDto = new AccountDTO(account);
		
		System.out.println(accountDto);
		return accountDto;
	}
	
	
	// Validação para verificar se a conta existe
	public Long accountValidation(int account) {
		
		Account acc = repository.findUserAccountByAccountNumber(account);
		
		if(acc == null) {
			throw new AuthenticationException("Usuário não encontrado");
		}
		
		

		return acc.getId();
	}
	
	
	
	
	

	// Método para fazer depósitos
	public AccountDTO deposit(Double value, int accountNumber) {

		Account account = repository.findUserAccountByAccountNumber(accountNumber);
		
		if(account ==  null) {
			throw new AuthenticationException("Conta não encontrada");
		}

		System.out.println(account);
		if (value <= 0) {
			throw new BusinessRulesException("Valor de depósito inválido");
		}

		account.setSaldoConta(account.getSaldoConta() + value);

		repository.save(account);

		account = repository.findUserAccountByAccountNumber(accountNumber);
		AccountDTO accountDto = new AccountDTO(account);

		return accountDto;
	}

	
	
	
	
	// Método para fazer saques
	public AccountDTO withDraw(Double value, int accountNumber) {
		Account account = repository.findUserAccountByAccountNumber(accountNumber);
		
		if(account ==  null) {
			throw new AuthenticationException("Conta não encontrada");
		}

		if (value <= 0) {
			throw new BusinessRulesException("Valor de saque inválido!");
		}

		if (value > account.getSaldoConta()) {
			throw new BusinessRulesException("Saldo insuficiente");
		}

		account.setSaldoConta(account.getSaldoConta() - value);

		repository.save(account);

		account = repository.findUserAccountByAccountNumber(accountNumber);
		AccountDTO accountDto = new AccountDTO(account);

		return accountDto;
	}

	
	
	
	
	
	
	// Método para fazer transferências via PIX
	public ResponseAccountTransferDTO pixTransfer(int issuerAccountNumber, int receiverAccountNumber, Double value) {

		// CONTA DO EMISSOR
		Account issuerAccount = repository.findUserAccountByAccountNumber(issuerAccountNumber);

		// CONTA DO RECEPTOR
		Account receiverAccount = repository.findUserAccountByAccountNumber(receiverAccountNumber);
		
		if(receiverAccount == null) {
			throw new AuthenticationException("Conta não encontrada");
		}

		// VALOR MÁXIMO PARA TRANFERÊNCIAS VIA PIX
		Double maxValue = 5000d;

		// Verificando se os números das contas do emissor e do receptor são iguais
		if (issuerAccount.getNumeroConta() == receiverAccount.getNumeroConta()) {
			throw new BusinessRulesException(
					"Sua transferência não foi completada pois: Não são permitidas tranferências para a mesma conta");
		}
		
		// Verificando se o valor a ser tranferido é menor ou igual a zero
		if (value <= 0) {
			throw new BusinessRulesException(
					"Sua transferência não foi completada pois: Valor inserido para fazer a transferência é inválido");
		}

		// Verificando se o valor solicitado para a transferência está dentro do limite
		// de R$5mil
		if (value > maxValue) {
			throw new BusinessRulesException(
					"Sua transferência não foi completada pois: O limite de valor máximo permitido para uma transferência via PIX é de R$ 5 mil");
		}

		

		// verificando se o o emissor tem saldo suficiente para efetuar a tranferência
		if (value > issuerAccount.getSaldoConta()) {
			throw new BusinessRulesException(
					"Sua transferência não foi completada pois: O Saldo é insuficiente para realizar a transferência");
		}

		// INSERINDO o valor solicitado para fazer a tranferência para a conta do
		// receptor
		receiverAccount.setSaldoConta(receiverAccount.getSaldoConta() + value);

		// RETIRANDO o valor solicitado para fazer a tranferência da conta do emissor
		issuerAccount.setSaldoConta(issuerAccount.getSaldoConta() - value);

		// ATUALIZANDO INFORMAÇÕES do receptor no banco de dados
		repository.save(receiverAccount);

		// ATUALIZANDO INFORMAÇÕES do emissor no banco de dados
		repository.save(issuerAccount);

		// PEGANDO AS INFORMAÇÕES ATUALIAZADAS do receptor
		receiverAccount = repository.findUserAccountByAccountNumber(receiverAccount.getNumeroConta());

		// PEGANDO AS INFORMAÇÕES ATUALIAZADAS do emissor
		issuerAccount = repository.findUserAccountByAccountNumber(issuerAccount.getNumeroConta());
		
		ResponseAccountTransferDTO responseAccountTransferDTO = new ResponseAccountTransferDTO();
		
		responseAccountTransferDTO.setEmissor(issuerAccount.getTitular());
		responseAccountTransferDTO.setAgenciaConta(issuerAccount.getAgenciaConta());
		responseAccountTransferDTO.setNumeroConta(issuerAccount.getNumeroConta());
		responseAccountTransferDTO.setSaldoConta(issuerAccount.getSaldoConta());
		responseAccountTransferDTO.setReceptor(receiverAccount);

		return responseAccountTransferDTO;
	}

	
	
	
	
	
	// Método para fazer transferências via TED
	public ResponseAccountTransferDTO tedTransfer(int issuerAccountNumber, int receiverAccountNumber, Double value) {

		// conta do EMISSOR
		Account issuerAccount = repository.findUserAccountByAccountNumber(issuerAccountNumber);

		// conta do RECEPTOR
		Account receiverAccount = repository.findUserAccountByAccountNumber(receiverAccountNumber);
		
		if(receiverAccount == null) {
			throw new AuthenticationException("Conta não encontrada");
		}

		// VALOR MÍNIMO PARA TRANFERÊNCIAS VIA TED
		Double minValue = 5000d;

		// VALOR MÁXIMO PARA TRANFERÊNCIAS VIA TED
		Double maxValue = 10000d;

		// Verificando se os números das contas do emissor e do receptor são iguais
		if (issuerAccount.getNumeroConta() == receiverAccount.getNumeroConta()) {
			throw new BusinessRulesException(
					"Sua transferência não foi completada pois: Não são permitidas tranferências para a mesma conta");
		}
		
		// Verificando se o valor a ser tranferido é menor ou igual a zero
		if (value <= 0) {
			throw new BusinessRulesException(
					"Sua transferência não foi completada pois: Valor inserido para fazer a transferência é inválido");
		}

		// Verificando se o valor solicitado para a transferência está dentro do limite
		// máximo de R$10mil
		if (value > maxValue) {
			throw new BusinessRulesException(
					"Sua transferência não foi completada pois: Transferências via TED só são permitidas para valores até R$ 10 mil");
		}

		// Verificando se o valor solicitado para a transferência está dentro do mínimo
		// de R$5.000,001
		if (value <= minValue) {
			throw new BusinessRulesException(
					"Sua transferência não foi completada pois: Transferências via TED só são permitidas para valores acima de R$ 5 mil");
		}

		

		// verificando se o o emissor tem saldo suficiente para efetuar a tranferência
		if (value > issuerAccount.getSaldoConta()) {
			throw new BusinessRulesException(
					"Sua transferência não foi completada pois: O Saldo é insuficiente para realizar a transferência");
		}

		// INSERINDO o valor solicitado para fazer a tranferência para a conta do
		// receptor
		receiverAccount.setSaldoConta(receiverAccount.getSaldoConta() + value);

		// RETIRANDO o valor solicitado para fazer a tranferência da conta do emissor
		issuerAccount.setSaldoConta(issuerAccount.getSaldoConta() - value);

		// ATUALIZANDO INFORMAÇÕES do receptor no banco de dados
		repository.save(receiverAccount);

		// ATUALIZANDO INFORMAÇÕES do emissor no banco de dados
		repository.save(issuerAccount);

		// PEGANDO AS INFORMAÇÕES ATUALIAZADAS do receptor
		receiverAccount = repository.findUserAccountByAccountNumber(receiverAccount.getNumeroConta());

		// PEGANDO AS INFORMAÇÕES ATUALIAZADAS do emissor
		issuerAccount = repository.findUserAccountByAccountNumber(issuerAccount.getNumeroConta());

		ResponseAccountTransferDTO responseAccountTransferDTO = new ResponseAccountTransferDTO();
		
		responseAccountTransferDTO.setEmissor(issuerAccount.getTitular());
		responseAccountTransferDTO.setAgenciaConta(issuerAccount.getAgenciaConta());
		responseAccountTransferDTO.setNumeroConta(issuerAccount.getNumeroConta());
		responseAccountTransferDTO.setSaldoConta(issuerAccount.getSaldoConta());
		responseAccountTransferDTO.setReceptor(receiverAccount);

		return responseAccountTransferDTO;
	}
	
	
	
	
	

	// Método para fazer transferências via DOC
	public ResponseAccountTransferDTO docTransfer(int issuerAccountNumber, int receiverAccountNumber, Double value) {

		// conta do EMISSOR
		Account issuerAccount = repository.findUserAccountByAccountNumber(issuerAccountNumber);

		// conta do RECEPTOR
		Account receiverAccount = repository.findUserAccountByAccountNumber(receiverAccountNumber);
		
		if(receiverAccount == null) {
			throw new AuthenticationException("Conta não encontrada");
		}

		// VALOR MÍNIMO PARA TRANFERÊNCIAS VIA DOC
		Double minValue = 10000d;

		// Verificando se os números das contas do emissor e do receptor são iguais
		if (issuerAccount.getNumeroConta() == receiverAccount.getNumeroConta()) {
			throw new BusinessRulesException(
					"Sua transferência não foi completada pois: Não são permitidas tranferências para a mesma conta");
		}
		
		// Verificando se o valor a ser tranferido é menor ou igual a zero
		if (value <= 0) {
			throw new BusinessRulesException(
					"Sua transferência não foi completada pois: Valor inserido para fazer a transferência é inválido");
		}

		// Verificando se o valor solicitado para a transferência está dentro do limite
		// mínimo de R$10.000,01
		if (value <= minValue) {
			throw new BusinessRulesException(
					"Sua transferência não foi completada pois: Transferências via DOC só são permitidas para valores acima de R$ 10 mil");
		}

		

		// verificando se o o emissor tem saldo suficiente para efetuar a tranferência
		if (value > issuerAccount.getSaldoConta()) {
			throw new BusinessRulesException(
					"Sua transferência não foi completada pois: O Saldo é insuficiente para realizar a transferência");
		}

		// INSERINDO o valor solicitado para fazer a tranferência para a conta do
		// receptor
		receiverAccount.setSaldoConta(receiverAccount.getSaldoConta() + value);

		// RETIRANDO o valor solicitado para fazer a tranferência da conta do emissor
		issuerAccount.setSaldoConta(issuerAccount.getSaldoConta() - value);

		// ATUALIZANDO INFORMAÇÕES do receptor no banco de dados
		repository.save(receiverAccount);

		// ATUALIZANDO INFORMAÇÕES do emissor no banco de dados
		repository.save(issuerAccount);

		// PEGANDO AS INFORMAÇÕES ATUALIAZADAS do receptor
		receiverAccount = repository.findUserAccountByAccountNumber(receiverAccount.getNumeroConta());

		// PEGANDO AS INFORMAÇÕES ATUALIAZADAS do emissor
		issuerAccount = repository.findUserAccountByAccountNumber(issuerAccount.getNumeroConta());

		ResponseAccountTransferDTO responseAccountTransferDTO = new ResponseAccountTransferDTO();
		
		responseAccountTransferDTO.setEmissor(issuerAccount.getTitular());
		responseAccountTransferDTO.setAgenciaConta(issuerAccount.getAgenciaConta());
		responseAccountTransferDTO.setNumeroConta(issuerAccount.getNumeroConta());
		responseAccountTransferDTO.setSaldoConta(issuerAccount.getSaldoConta());
		responseAccountTransferDTO.setReceptor(receiverAccount);

		return responseAccountTransferDTO;

	}
	
	

}
