package com.banco.projeto.testeturing.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.banco.projeto.testeturing.DTO.AccountDTO;
import com.banco.projeto.testeturing.DTO.UserDTO;
import com.banco.projeto.testeturing.DTO.UserRequestByPasswordDTO;
import com.banco.projeto.testeturing.exceptions.AuthenticationException;
import com.banco.projeto.testeturing.services.AccountService;
import com.banco.projeto.testeturing.services.UserServices;

@RestController
@RequestMapping(value = "/usuario")
public class UserResources {
	
	@Autowired
	public UserServices service;
	
	@Autowired
	public AccountService accountService;
	
	@PostMapping(value = "/login")
	public ResponseEntity passwordValidation(@RequestBody UserRequestByPasswordDTO request){
		System.out.println(request.getPassword());
		try {
			
			UserDTO user = service.passwordValidation(request.getPassword());
			
			
			
			AccountDTO account = accountService.getUserAccountByUserId(user.getId());
		
			return ResponseEntity.ok().body(account);
		} catch (AuthenticationException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
	}
	

}
