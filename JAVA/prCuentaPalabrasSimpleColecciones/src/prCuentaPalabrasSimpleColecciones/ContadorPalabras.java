package prCuentaPalabrasSimpleColecciones;


import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.NoSuchElementException;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class ContadorPalabras {
	private Set<PalabraEnTexto> palabras;
	
	public ContadorPalabras() {	
		palabras = new TreeSet<>();
	}
		
	
	protected void incluye(String pal) {
		try {
			PalabraEnTexto pEnc = encuentra(pal);
			pEnc.incrementa();
		} catch (NoSuchElementException e) {
			palabras.add(new PalabraEnTexto(pal));
		}
	}
	
	private void incluyeTodas(String linea, String del) {
		try (Scanner sc = new Scanner(linea)) {
			sc.useDelimiter(del);
			while (sc.hasNext()) {
				incluye(sc.next());
			}
		}
	}
	
	public void incluyeTodas(String [] texto, String del) {
		for (String linea : texto) {
			incluyeTodas(linea, del);
		}
	}
	
	public void incluyeTodasFichero(String nombreFichero, String del) throws FileNotFoundException {
		try (Scanner sc = new Scanner(new File(nombreFichero))) {
			leerFichero(sc, del);
		}
	}
	
	private void leerFichero(Scanner sc, String del) {
		while (sc.hasNextLine()) {
			incluyeTodas(sc.nextLine(), del);
		}
	}

	public PalabraEnTexto encuentra(String pal) {
		PalabraEnTexto pet = new PalabraEnTexto(pal);
		Iterator<PalabraEnTexto> it = palabras.iterator();
		PalabraEnTexto pEnc = null;
		boolean seguir = true;
		while (it.hasNext() && seguir) {
			pEnc=it.next();
			seguir = pEnc.compareTo(pet) < 0;
		}
		if (pEnc == null || !pEnc.equals(pet)) {
			throw new NoSuchElementException("Palabra no encontrada: " + pal);
		}
		return pEnc;
	}

	public void presentaPalabras(String nombreFichero) throws FileNotFoundException {
		try (PrintWriter pw = new PrintWriter(nombreFichero)) {
			presentaPalabras(pw);
		}
	}
	
	public void presentaPalabras(PrintWriter pw) {
		for(PalabraEnTexto pet : palabras) {
			pw.println(pet);
		}
	}
	
	
	@Override 
	public String toString() {
		StringBuilder sb = new StringBuilder("[");
		int nuElem = 0;
		for (PalabraEnTexto pet : palabras) {
			sb.append(pet);
			if (nuElem != palabras.size()-1) {
				sb.append(", ");
			}	
			nuElem++;
		}
		sb.append("]");
		return sb.toString();
	}
}


