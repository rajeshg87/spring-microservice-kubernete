package com.rajesh.user.controller;

import java.util.List;

import org.apache.commons.collections4.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rajesh.user.model.User;
import com.rajesh.user.repo.UserRepository;

import lombok.extern.slf4j.Slf4j;

@RestController("user")
@CrossOrigin(origins = "http://microservices.info:8080", maxAge = 3600)
@Slf4j
public class UserController {

	@Autowired
	UserRepository repository;

	@PostMapping("/user/add")
	public List<User> add(@RequestBody User user) {
		log.info("User add: {}", user);
		if (null != user && null != user.getName() && null != user.getCity()
				&& repository.findByName(user.getName()).isEmpty()) {
			repository.save(user);
		}
		return findAll();
	}

	@GetMapping("/user/name/{name}")
	public List<User> findByName(@PathVariable("name") String name) {
		log.info("User find: name={}", name);
		return repository.findByName(name);
	}

	@GetMapping("/user/city/{city}")
	public List<User> findByCity(@PathVariable("city") String city) {
		log.info("User find: city={}", city);
		return repository.findByCity(city);
	}

	@GetMapping("/user")
	public List<User> findAll() {
		log.info("User find");
		List<User> users = IteratorUtils.toList(repository.findAll().iterator()); 
		log.info("USERS : "+users);
		return users;
	}

	@DeleteMapping("/user/{name}")
	public List<User> deleteByName(@PathVariable("name") String name) {		
		repository.findByName(name).stream().forEach(user -> repository.delete(user));
		return findAll();
	}
	
	@DeleteMapping("/user/delete")
	public List<User> deleteAll() {		
		log.info("Delete All !!!");
		repository.deleteAll();
		return findAll();
	}

}
