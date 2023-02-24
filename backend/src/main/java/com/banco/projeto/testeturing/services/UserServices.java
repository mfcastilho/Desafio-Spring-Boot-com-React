package com.banco.projeto.testeturing.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banco.projeto.testeturing.DTO.UserDTO;
import com.banco.projeto.testeturing.entities.User;
import com.banco.projeto.testeturing.repositories.UserRepository;

@Service
public class UserServices {
	
	@Autowired
	private UserRepository repository;
	
public UserDTO passwordValidation(String password) {
		
		User user = repository.findUserByPassword(password);
		
		UserDTO userDto = new UserDTO(user);
		
		return userDto;
	}

}
