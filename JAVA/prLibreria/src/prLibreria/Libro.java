package prLibreria;

public class Libro {



static private double IVA = 10.0;


private String autor;
private String titulo;
private double precio;


// Ahora necesitamos el constructor 


public Libro (String a, String b, double p) { 
	
	autor=a;
	titulo=b;
	precio=p;
	
	
	if (p<0) {
		throw new RuntimeException("El precio no puede ser negativo");
		
	}
}




// Empezamos con los metodos

public String getAutor() {
	
	return autor;
}

public String getTitulo() {
	
	return titulo;
}

public double getPrecioBase() {
	
	return precio;
}


public double getPrecioFinal() {
	
	return precio + precio *( IVA/100);
}

public String toString() {
	
	return "("+ autor +" ; "+ titulo +";"+ precio +";"+IVA+ "% ;"+ getPrecioFinal() +")";
	
}


// Metodos de clase 

static public double getIVA() {
	return IVA;
	
}

// Ahor anecesitamos un metodo de clase para CAMBIAR IVA por tanto usaremos public void

static public void setIVA(double iva2) {
	
	IVA = iva2; 
	
}








































}
