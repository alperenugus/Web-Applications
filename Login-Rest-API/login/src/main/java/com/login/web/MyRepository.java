package com.login.web;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MyRepository extends CrudRepository<MyModel , Integer>{

	MyModel findByEmailAndPassword(String email, String password);
}
