package com.banco.projeto.testeturing.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.banco.projeto.testeturing.entities.Account;


@Repository
public interface AccountRepository extends JpaRepository<Account, Long>{
	
	@Query(nativeQuery = true, value = "select id from tb_conta where numero_conta = :account")
	int findUserIdByAccount(int account);
	
	@Query(nativeQuery = true, value = "select * from tb_conta where numero_conta = :account")
	Account findUserAccountByAccountNumber(int account);
	
	
}
