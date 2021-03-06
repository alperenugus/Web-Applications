package com.alpi.worker;
import javax.persistence.*;

@Entity
public class WorkerForm {

	@Id
	private String id;
	private String name;
	private String surname;
	private String salary;
	
	public WorkerForm() {

	}
	
	public WorkerForm(String id, String name, String surname, String salary) {

		this.id = id;
		this.name = name;
		this.surname = surname;
		this.salary = salary;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public String getSalary() {
		return salary;
	}
	public void setSalary(String salary) {
		this.salary = salary;
	}
	
	
}
