package prLibreria;

import java.util.Arrays;

public class LibreriaOferta extends Libreria{

	
	private double descuento;
	private String[] autoresEnOferta; // Array que incluye los autores en oferta
	
	
	
	// Constructores de la libreria en oferta
	
	public LibreriaOferta(double d, String[] a) { // Primer constructor recibe el descuento y los autores ocn ese descuento. Tamaño estandar
		
		descuento = d;
		autoresEnOferta = a;
		
	}
	
	// segundo constructor, recibe tamaño con el primer parametro
	
	public LibreriaOferta(int e, double d, String[] a) {
		
		super(CAPACIDAD);
		descuento = d;
		autoresEnOferta = a;
		
		
	}
	
	
	// Empezamos con los metodos
	
	public void setOferta(double d, String[] a) {
		
		descuento = d;
		autoresEnOferta = a; 
	}
	
	public String[] getOferta() {
		return autoresEnOferta;
		
	}
	public double getDescuento() {
		
		return descuento;
		
	}
	
	//Redefiniciones
	
	@Override public void addLibro(String a, String b, double p) {
		
		if( BuscarAutorOferta(a) >= 0 ) {
			
			aniadirLibro(new LibroOferta (a,b,p,descuento));
			
		}else {
			
			aniadirLibro(new Libro(a, b, p));
		}
	}
	
	@Override public String toString() {
		
		// Creamos primero un nuevo string con lo que necesitamos o falta del tostring super
		
		String falta = getDescuento() + "% "+ Arrays.deepToString(autoresEnOferta);
		return falta + "\n" + super.toString();
		
	}
	
	//Nos faltaria el metodo para buscar los autores en oferta
	
	private int BuscarAutorOferta(String a) {
		
		int i= 0;
		while ((i < autoresEnOferta.length)&& ! autoresEnOferta[i].equalsIgnoreCase(a) ) { 
			++i;
		}
		
		if ( i==autoresEnOferta.length) {
			i = -1; }
		return i;
		
				
			}
		
	}

