package com.banco.projeto.testeturing.repositories;



import com.banco.projeto.testeturing.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	@Query(nativeQuery = true, value = "select * from tb_user where senha = :password")
	User findUserByPassword(String password);
}
