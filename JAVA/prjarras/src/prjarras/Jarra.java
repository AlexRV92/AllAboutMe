package prjarras;

public class Jarra {
	
	private int contenido;
	/* esto es un atributo o cualidad del objeto*
	 * 
	 */
	private final int capacidad;
	
	/* constante de instancia almacena la capacidad total
	 * No hay mas atributos por ahora 
	 */
	
	
	public Jarra(int c) {
		/* primer constructor, inicio de métodos
		 *  recibe el parametro c y crea e inicializa el objeto
		 */
		contenido = 0;
		capacidad = c;
		
	}
	
	public int capacidad() {
		return capacidad;
	}
	
	public int contenido() {
		return contenido;
		
	}
	
	/* Ahora vamos con los métodos más expecificos
	 * 
	 */
	
	public void llena() {
		
		contenido = capacidad; 
		
	}
	
	public void vacia() {
		contenido = 0;
	}
	
	public void llenaDesde(Jarra j) {
		int entra= capacidad - contenido;
		
		if (entra >= j.contenido) {
			contenido += j.contenido;
			j.contenido = 0;
		} else {
			contenido = capacidad;
			j.contenido -= entra;
		}
		
	}
	
	public String toString() {
		return "(" + capacidad + "," +contenido+ ")";
	}	
}
	
