package prCuentaPalabrasSimpleColecciones;


public class PalabraEnTexto implements Comparable<PalabraEnTexto> {
	private String palabra;
	private int nVeces;
	
	public PalabraEnTexto(String p) {
		palabra = p.toUpperCase();
		nVeces = 1;
	}
	
	@Override
	public boolean equals(Object o) {
		boolean res = o instanceof PalabraEnTexto;
		PalabraEnTexto pet = res ? (PalabraEnTexto)o : null;
		return res && palabra.equalsIgnoreCase(pet.palabra);
	}
	
	@Override
	public int compareTo(PalabraEnTexto p) {
		return palabra.compareTo(p.palabra);
	}
	
	public String getPalabra() {
		return palabra;
	}
	
	@Override
	public int hashCode() {
		return palabra.toLowerCase().hashCode();
	}
	
	public void incrementa() {
		nVeces++;
	}
	
	@Override
	public String toString() {
		return palabra.toUpperCase() + ": " + nVeces; 
	}
}