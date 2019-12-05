package com.alpi.worker;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WorkerController {
	
	@Autowired
	WorkerService workerService;
	
	@RequestMapping(value="/workers/{id}", method=RequestMethod.GET)
	public WorkerForm getWorker(@PathVariable String id) {
		return workerService.getWorker(id);
	}
	
	@RequestMapping(value="/workers", method=RequestMethod.GET)
	public List<WorkerForm> getAllWorkers() {
		return workerService.getAllWorkers();
	}
	
	@RequestMapping(value="/workers", method=RequestMethod.POST)
	public void addWorker(@RequestBody WorkerForm worker) {
		workerService.addWorker(worker);
	}
	
	@RequestMapping(value="/workers/{id}" , method=RequestMethod.PUT)
	public void updateWorker(@RequestBody WorkerForm worker) {
		workerService.updateWorker(worker);
	}
	
	@RequestMapping(value="/workers/{id}" , method=RequestMethod.DELETE)
	public void deleteWorker(@PathVariable String id) {
		workerService.deleteWorker(id);
	}
}
