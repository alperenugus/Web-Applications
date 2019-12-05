package hibernate;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Projection;
import org.hibernate.criterion.Projections;

public class Dao {
	
	
	public void insert(int id, String name , String surname , int salary){
		
		SessionUtility sessionObject = new SessionUtility();
		
		Session session = sessionObject.getSession();
		
		try{
			System.out.println("Creating Worker Object.\n");
			Worker worker = new Worker(id,name , surname , salary);
			
			session.beginTransaction();
			
			System.out.println("Saving the object to the database.\n");
			session.save(worker);
			session.getTransaction().commit();

			System.out.println("All done!");
			
		}finally{
			sessionObject.closeFactory();
		}
		
		
	}
	
	
	public void delete(int id, String name , String surname , int salary){
		
		SessionUtility sessionObject = new SessionUtility();
		
		Session session = sessionObject.getSession();

		try{

			
			Worker worker = new Worker(id,name , surname , salary);
			
			session.beginTransaction();
			
			System.out.println("Deleting the object from the database.\n");
			session.delete(worker);
			session.getTransaction().commit();

			System.out.println("All done!");
			
		}finally{
			sessionObject.closeFactory();
		}
		
	}
	
	
	public void update(int id, String name , String surname , int salary){
		
		SessionUtility sessionObject = new SessionUtility();
		
		Session session = sessionObject.getSession();

		
		try{
			System.out.println("Creating Worker Object.\n");
			Worker worker = new Worker(id,name , surname , salary);
			
			session.beginTransaction();
			
			System.out.println("Saving the object to the database.\n");
			session.update(worker);
			session.getTransaction().commit();

			System.out.println("All done!");
			
		}finally{
			sessionObject.closeFactory();
		}
		
	}
	
	public void find(int id){
		
		SessionUtility sessionObject = new SessionUtility();
		
		Session session = sessionObject.getSession();

		
		try{
			System.out.printf("Finding the worker whose id is : %d\n" , id);
			session.beginTransaction();
			
			Worker worker = session.find(Worker.class, id);
			
			System.out.println(worker.getName());
			System.out.println(worker.getSurname());
			 
			session.getTransaction().commit();

			System.out.println("All done!");
			
		}finally{
			sessionObject.closeFactory();
		}
		
		
	}
	
	public void findBy(String property){
		
		SessionUtility sessionObject = new SessionUtility();
		
		Session session = sessionObject.getSession();
		
		try{
			System.out.println("Finding the workers with projection property : \n");
			
			session.beginTransaction();
			
			
			Criteria c = session.createCriteria(Worker.class);
			
			Projection p = Projections.property(property);
			
			if(property == "id" || property == "salary"){
				
				List <Integer> workers = c.setProjection(p).list();
				for(Integer i:workers){
					System.out.println(i);
				}
			}
			
			else{
				List <String> workers= c.setProjection(p).list();
				
				for(String s:workers){
					System.out.println(s);
				}
			}
			
			
	            
			session.getTransaction().commit();
			
			
		}finally{
			sessionObject.closeFactory();
		}

		
	}
	
	public void getTable(String tableName){
		
		SessionUtility sessionObject = new SessionUtility();
		
		Session session = sessionObject.getSession();
		
		try{
			System.out.println("Here is the table named: " + tableName);
			
			session.beginTransaction();
			
			List <Worker> table = session.createQuery("from Worker").getResultList();
			
			for(int i=0; i< table.size(); i++){
				 System.out.println(table.get(i));
			}
			
			
		}finally{
			sessionObject.closeFactory();
		}
		
	}

}
