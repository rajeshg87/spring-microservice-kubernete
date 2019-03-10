package com.rajesh.employee.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "employee")
@Data
public class Employee {

	@Id
	private String id;
	private Long organizationId;
	private Long departmentId;
	private String name;
	private int age;
	private String position;

	public Employee() {

	}
	
	public Employee(Long organizationId, Long departmentId, String name, int age, String position) {
		this.organizationId = organizationId;
		this.departmentId = departmentId;
		this.name = name;
		this.age = age;
		this.position = position;
	}

}
