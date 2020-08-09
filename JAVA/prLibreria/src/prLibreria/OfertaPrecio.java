package prLibreria;
 


public class OfertaPrecio implements OfertaFlex {

	private double descuento;
	private double umbral;
	
	
	//Constructor
	
	public OfertaPrecio(double des, double um) {
		
		descuento = des;
		umbral = um;
		
	}
	
	
	
	@Override public double getDescuento(Libro lb) {
		
		// necesitamos una variable con valor 0, para en caso de no aplicar salga 0
		
		double x = 0;
		
		if(lb.getPrecioBase() >= umbral ) {
			
			x = descuento;
		}
		
		return x;
		
	}
	
	@Override public String toString() {
		
		return descuento+"%(" +umbral+ ") ";
	}
	
	
}

