import prLibreria.Libro;
import prLibreria.Libreria;


public class PruebaLibreria {
	
	
	public static void main(String[] args) {
		
		
		Libreria L = new Libreria();
		
		
		// vamos a�adiendo libros
		
		L.addLibro("george orwell", "1984", 8.20);
		L.addLibro("Philip K. Dick", "�Sue�an los androides con ovejas el�ctricas?", 3.50);
		L.addLibro("Isaac Asimov", "Fundaci�n e Imperio", 9.40);
		L.addLibro("Ray Bradbury", "Fahrenheit 451", 7.40);
		L.addLibro("Aldous Huxley", "Un Mundo Feliz", 6.50);
		L.addLibro("Isaac Asimov", "La Fundaci�n", 7.30);
		L.addLibro("William Gibson", "Neuromante", 8.30);
		L.addLibro("Isaac Asimov", "Segunda Fundaci�n", 8.10);
		L.addLibro("Isaac Newton", "arithmetica universalis", 7.50);
		L.addLibro("George Orwell", "1984", 6.20);
		L.addLibro("Isaac Newton", "Arithmetica Universalis", 10.50);
		
		
		System.out.println(L);


		L.remLibro("George Orwell", "1984");
		L.remLibro("Aldous Huxley", "Un Mundo Feliz");
		L.remLibro("Isaac Newton", "Arithmetica Universalis");
		L.remLibro("James Gosling", "The Java Language Specification");
		
		System.out.println(L);
		System.out.println();

		
		System.out.println(L.getPrecioFinal("George Orwell", "1984"));
		System.out.println(L.getPrecioFinal("Philip K. Dick", "�Sue�an los androides con ovejas el�ctricas?"));
		System.out.println(L.getPrecioFinal("isaac asimov", "fundaci�n e imperio"));
		System.out.println(L.getPrecioFinal("Ray Bradbury", "Fahrenheit 451"));
		System.out.println(L.getPrecioFinal("Aldous Huxley", "Un Mundo Feliz"));
		System.out.println(L.getPrecioFinal("Isaac Asimov", "La Fundaci�n"));
		System.out.println(L.getPrecioFinal("william gibson", "neuromante"));
		System.out.println(L.getPrecioFinal("Isaac Asimov", "Segunda Fundaci�n"));
		System.out.println(L.getPrecioFinal("Isaac Newton", "Arithmetica Universalis"));
		
		
		
	}

}
