package prLibreria;

public class LibroOferta extends Libro {
	
	private double descuento;
	
	//Constructor para librooferta
	
	public LibroOferta(String a, String b, double p, double d) {
		
		super(a,b,p);
		descuento = d;
		
	}
	
	public double getDescuento() {
		
		return descuento;
	}
	
	//Tenemos que redefinir el precio final
	
	@Override public double getPrecioFinal() {
		
		double precionuevo = getPrecioOferta(); //TENEMOS QUE CREAR ESTE METODO
		return precionuevo + precionuevo *getIVA()/100;
	}
	
	protected double getPrecioOferta() {
		
		return getPrecioBase()- (getPrecioBase()* (getDescuento()/100));
		
	}
	
@Override public String toString() {
	
	return "(" +getAutor()+ ";" +getTitulo()+ ";" +getPrecioBase()+ ";" +getDescuento()+ "% ;" +getPrecioOferta()+ ";" +getIVA()+ " %;" +getPrecioFinal()+ ")";
}
}
