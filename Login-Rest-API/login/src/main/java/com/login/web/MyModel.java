package com.login.web;

import java.io.Serializable;

import javax.persistence.*;

@Entity(name = "login")
public class MyModel implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "email")
	private String email;

	@Column(name = "password")
	private String password;

	public MyModel(int id, String email, String password) {
		this.id = id;
		this.email = email;
		this.password = password;
	}

	public MyModel() {

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
