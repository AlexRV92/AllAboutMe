package prLibreria;

import java.util.Arrays;

public class OfertaAutor implements OfertaFlex {

	
	
	private double descuento;
	private String[] autoresEnOferta;
	
	// constructor
	
	public OfertaAutor(String[] a, double desc) {
		
		autoresEnOferta = a;
		descuento = desc;
		
	}
	
	// Metodos
	
	@Override public double getDescuento(Libro lb) {
		
		//volvemos a necesitar una variable con valor 0
		
		double x = 0;
		
		if(BuscarAutorOferta(lb.getAutor())>= 0) {
			
			x = descuento;
			
		}
		
		return x;
	}
	
	
@Override public String toString() {
	
	return descuento+ "%[" +Arrays.deepToString(autoresEnOferta)+ "]";
}


// Necesitamos el metodo de buscar entre los autores en oferta

private int BuscarAutorOferta (String a) {
	
	int i=0;
	
	while ((i< autoresEnOferta.length)&& !autoresEnOferta[i].equalsIgnoreCase(a)) {
		++i;
		
	}
	
	if (i==autoresEnOferta.length) {
		
		i= -1;
	}
		return i;
}
}
