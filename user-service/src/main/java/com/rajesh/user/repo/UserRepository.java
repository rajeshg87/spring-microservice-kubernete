package com.rajesh.user.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.rajesh.user.model.User;

public interface UserRepository extends CrudRepository<User, String> {
	
	List<User> findByName(String name);
	List<User> findByCity(String city);
	
}
