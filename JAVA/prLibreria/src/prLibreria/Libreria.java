package prLibreria;
import java.util.Arrays;
import prLibreria.Libro;


public class Libreria {
	
	
// Primero definiremos la capacidad de la libreria
	
protected static final int CAPACIDAD = 8;

// Necesitamos saber cuantos libros hay dentro

private int numeroLibros;

// Hacemos el array

private Libro libros[];




// Constructores


public Libreria() {
	
	this(CAPACIDAD); // capacidad inicial o predefinida
	
}

// si queremos indicar la capacidad mediante argumento seria

public Libreria(int capacidad) {
	
	numeroLibros=0;
	libros = new Libro[capacidad];
	
}

// Añadimos los metodos

public void addLibro(String a, String b, double p) {
	
	Libro lib=new Libro( a , b, p);
	aniadirLibro(lib); // Necesitaremos crear este metodo auxiliar
	
}

public void remLibro(String a, String b) {
	
	int pos = buscarLibro( a, b);
	if (pos >=  0) {
		
		eliminarLibro(pos); // Al igual que al añadir, necesitamos
		// mas metodos auxiliares
		
	}
}

public double getPrecioBase(String a, String b) {
	
	int posicion = buscarLibro(a, b);
	return posicion >= 0 ? libros[posicion].getPrecioBase() : 0;
	
}

public double getPrecioFinal(String a, String b) {
	
	return getPrecioBase(a,b) * ( 1+Libro.getIVA()/100);
	
}


// Representacion del objeto libreria

public String toString() {
	// hay que hacer un bucle para la cantidad de libros que haya en el array
	
	String cadena = "[";
	for(int i=0; i < numeroLibros; i++) {
		
		cadena += libros[i];
		
		if (i < numeroLibros - 1) {
			
			cadena += ",";
			
		}
		
	}
	
	cadena += "]";
	return cadena;
}


// Metodos auxiliares privados


protected void aniadirLibro(Libro l) {
	
	int posicion= buscarLibro(l.getAutor(), l.getTitulo());
	if ( posicion >= 0 ) {
		
		libros[posicion] = l; // El libro ya esta
		
	} else { //no esta el libro
		
		// tenemos que comprobar si el array esta lleno
		if (numeroLibros==libros.length) {
			libros= Arrays.copyOf( libros, 2 * libros.length);
		}
		libros[numeroLibros] = l;
		numeroLibros++;
		
		}
	}


private void  eliminarLibro( int posicion) {
	libros[posicion]= libros[numeroLibros-1];
	libros[numeroLibros-1]= null;
	numeroLibros--;
	
}

// y ahora buscar libro para terminar todo

private int buscarLibro(String a, String b) {
	
	boolean buscar = false;
	int i=0;
	while (!buscar && i < numeroLibros) {
		buscar = libros[i].getAutor().equalsIgnoreCase(a)&& libros[i].getTitulo().equalsIgnoreCase(b);
		i++;
		
	}
	
	return buscar ? i-1: -1;
}





}
