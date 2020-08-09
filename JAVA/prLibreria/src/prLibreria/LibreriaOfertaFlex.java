package prLibreria;

public class LibreriaOfertaFlex extends Libreria {
	
	private OfertaFlex oferta;
	
	//constructores
	
	public LibreriaOfertaFlex(OfertaFlex o) {
		
		this (CAPACIDAD, o);
	}
	
	public LibreriaOfertaFlex(int capacidad, OfertaFlex o) {
		
		super(capacidad);
		oferta = o;
	}

	
	// metodos
	
	public void setOferta(OfertaFlex o) {
		oferta = o;
		
		
	}
	
	public OfertaFlex getOferta() {
		
		return oferta;
	}
	
	@Override public void addLibro(String a, String b, double p) {
		
		Libro lb = new Libro(a, b, p);
		double descuento = oferta.getDescuento(lb);
		
		if (descuento != 0) {
			aniadirLibro (new LibroOferta(a, b, p, descuento));
		} else {
			
			aniadirLibro(lb);
		}
	}
	
	@Override public String toString() {
		
		return oferta.toString()+ "\n " +super.toString();
	}
}
