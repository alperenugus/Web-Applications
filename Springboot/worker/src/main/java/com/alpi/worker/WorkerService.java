package com.alpi.worker;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class WorkerService {
	
	@Autowired
	WorkerRepository workerRepository;
	
	public WorkerForm getWorker(String id) {
		
		return workerRepository.findOne(id);
		
	}
	
	public List<WorkerForm> getAllWorkers() {
		List<WorkerForm> workers = new ArrayList();
		workerRepository.findAll().forEach(workers::add);
		return workers;
	}
	
	public void addWorker(WorkerForm worker) {
		workerRepository.save(worker);
	}
	
	public void deleteWorker(String id) {
		workerRepository.delete(id);
	}
	
	public void updateWorker(WorkerForm worker) {
		workerRepository.save(worker);
	}
		
}