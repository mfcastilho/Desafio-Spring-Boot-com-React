package com.banco.projeto.testeturing.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.banco.projeto.testeturing.DTO.UserDTO;
import com.banco.projeto.testeturing.exceptions.AuthenticationException;
import com.banco.projeto.testeturing.services.UserServices;

@RestController
@RequestMapping(value = "/usuario")
public class UserResources {
	
	@Autowired
	public UserServices service;
	
	@GetMapping(value = "/{password}")
	public ResponseEntity findUserByPassword(@PathVariable String password){
		
		try {
			UserDTO user = service.passwordValidation(password);
			
			return ResponseEntity.ok().body(user);
		} catch (AuthenticationException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
	}
	

}
