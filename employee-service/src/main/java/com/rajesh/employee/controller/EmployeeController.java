package com.rajesh.employee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rajesh.employee.model.Employee;
import com.rajesh.employee.repo.EmployeeRepository;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class EmployeeController {

	@Autowired
	EmployeeRepository repository;
	
	@PostMapping("/")
	public Employee add(@RequestBody Employee employee) {
		log.info("Employee add: {}", employee);
		return repository.save(employee);
	}
	
	@GetMapping("/{id}")
	public Employee findById(@PathVariable("id") String id) {
		log.info("Employee find: id={}", id);
		return repository.findById(id).get();
	}
	
	@GetMapping("/")
	public Iterable<Employee> findAll() {
		log.info("Employee find");
		return repository.findAll();
	}
	
}
