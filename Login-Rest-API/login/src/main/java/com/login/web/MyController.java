package com.login.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class MyController {

	@Autowired
	MyService service;
	
	
	@RequestMapping(value="/signup", method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE)
	public void signup(@RequestBody MyModel model) {
		service.add(model);
	}
	
	@RequestMapping(value="/signin" , method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
	public boolean signin(@RequestBody MyModel model) {
		return service.control(model);
	}
	
}
