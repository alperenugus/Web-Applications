package com.login.web;

import java.util.List;
import java.io.Console;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class MyService {
	
	@Autowired
	MyRepository myRepo;
	
	public void add(MyModel model) {
		myRepo.save(model);
	}

	public boolean control(MyModel model) {
		MyModel user;
		user = (myRepo.findByEmailAndPassword(model.getEmail(), model.getPassword()));
		return user != null;
	}
	
	
}
