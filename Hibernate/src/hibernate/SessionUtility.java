package hibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class SessionUtility {

	private SessionFactory factory;

	public Session getSession() {
		factory = new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Worker.class)
				.buildSessionFactory();
		return factory.getCurrentSession();
	}

	public void closeFactory() {
		factory.close();
	}
}