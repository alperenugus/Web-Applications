package hibernate;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Scanner;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class CreateWorker {

	public static void main(String[] args) {
		
		Dao employee = new Dao();
		
		//employee.insert(1, "Alperen", "ÜGÜŞ", 8300);
		//employee.delete(4 , "Ali" , "ATAY" , 5700);
		//employee.update(3 , "Ali" , "ATAY" , 9332);
		//employee.insert(4 , "Ali" , "ATAY" , 5700);
		//employee.insert(12 , "Ramazan" , "KORUCU" , 3800);
		
		int id = 0, salary = 0;
		String name = null, surname = null;
		
		
		/*Scanner scanner = new Scanner(System.in);
		System.out.println("Enter the person to be inserted (id name surname salary): \n");
		String s = scanner.nextLine();
		String[] splitStrings = s.split(" ");
		System.out.printf(s);
		id = Integer.parseInt(splitStrings[0]);
		name = splitStrings[1];
		surname = splitStrings[2];
		salary = Integer.parseInt(splitStrings[3]);
		
		employee.insert(id, name, surname, salary);*/
		
		Dao test = new Dao();
		//test.find(2);
		
		//test.findBy("salary");
		
		test.getTable("worker");
		
		
		
	}

}
