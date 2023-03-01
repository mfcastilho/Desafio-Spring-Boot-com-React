package com.banco.projeto.testeturing.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.banco.projeto.testeturing.DTO.AccountDTO;
import com.banco.projeto.testeturing.DTO.AccountNumberDTO;
import com.banco.projeto.testeturing.DTO.RequestDTO;
import com.banco.projeto.testeturing.DTO.ResponseAccountTransferDTO;
import com.banco.projeto.testeturing.DTO.TransferRequestDTO;
import com.banco.projeto.testeturing.exceptions.AuthenticationException;
import com.banco.projeto.testeturing.exceptions.BusinessRulesException;
import com.banco.projeto.testeturing.services.AccountService;

@RestController
@RequestMapping(value = "/conta")
public class AccountResource {
	
	@Autowired
	public AccountService service;
	
	@GetMapping
	public ResponseEntity<List<AccountDTO>> findAll(){
		List<AccountDTO> listDTO = service.findAll();
		
		return ResponseEntity.ok().body(listDTO);
	}

	
	@PostMapping
	public ResponseEntity findUserAccountByAccountNumber(@RequestBody AccountNumberDTO account){
		
		try {
			
			Long userId =service.accountValidation(account.getAccountNumber());
			return ResponseEntity.ok().body(userId);
			
		} catch (AuthenticationException e) {
			
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
		
	}
	
	
	@PostMapping(value = "/depositar")
	public ResponseEntity deposit(@RequestBody RequestDTO request){
		
		try {
			System.out.println("Conta do Usuário:"+request.getAccountNumber());
			System.out.println("Valor do depósito:"+request.getValue());
			Long res = service.accountValidation(request.getAccountNumber());
			try {
				AccountDTO account = service.deposit(request.getValue(), request.getAccountNumber());
				return ResponseEntity.ok().body(account);
			}catch (BusinessRulesException e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}	
		} catch (NullPointerException e) {
			
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
		// TODO: handle exception
		
		
		
	}
	
	@PostMapping(value = "sacar")
	public ResponseEntity withDraw(@RequestBody RequestDTO request) {
		
		try {
			System.out.println("Conta do Usuário:"+request.getAccountNumber());
			System.out.println("Valor do saque:"+request.getValue());
			
			
			
			AccountDTO account = service.withDraw(request.getValue(), request.getAccountNumber());
			
			return ResponseEntity.ok().body(account);
		} catch (BusinessRulesException e) {
			
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
	}
	
	
	@PostMapping(value = "/transferencias/pix")
	public ResponseEntity pixTransfer( @RequestBody TransferRequestDTO request) {
		
		try {
			Long receiverAccountNumberId = service.accountValidation(request.getReceiverAccountNumber());
			
			try {
				
				ResponseAccountTransferDTO response = service.pixTransfer(request.getIssuerAccountNumber(), request.getReceiverAccountNumber(), request.getValue());
				return ResponseEntity.ok().body(response);
				
			} catch (BusinessRulesException e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}
		} catch (NullPointerException e) {
			
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}
	
	
	@PostMapping(value = "/transferencias/ted")
	public ResponseEntity tedTransfer(@RequestBody TransferRequestDTO request) {
		
		try {
			
			Long receiverAccountNumberId = service.accountValidation(request.getReceiverAccountNumber());
			try {
				
				ResponseAccountTransferDTO response = service.tedTransfer(request.getIssuerAccountNumber(), request.getReceiverAccountNumber(), request.getValue());
				return ResponseEntity.ok().body(response);
				
			} catch (BusinessRulesException e) {
				
				return ResponseEntity.badRequest().body(e.getMessage());
			}
		} catch (NullPointerException e) {
			
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}
	
	
	@PostMapping(value = "/transferencias/doc")
	public ResponseEntity docTransfer(@RequestBody TransferRequestDTO request) {
		try {
			Long receiverAccountNumberId = service.accountValidation(request.getReceiverAccountNumber());
			
			try {
				
				ResponseAccountTransferDTO response = service.docTransfer(request.getIssuerAccountNumber(), request.getReceiverAccountNumber(), request.getValue());
				return ResponseEntity.ok().body(response);
				
			} catch (BusinessRulesException e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}
			
		} catch (NullPointerException e) {
			
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
	}
	
}	
	
	
	

	

