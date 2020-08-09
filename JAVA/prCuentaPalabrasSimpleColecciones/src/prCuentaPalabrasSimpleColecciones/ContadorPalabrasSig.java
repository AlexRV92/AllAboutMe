package prCuentaPalabrasSimpleColecciones;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Collection;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class ContadorPalabrasSig extends ContadorPalabras {
	private Set<String> noSignificativas;
	
	public ContadorPalabrasSig(Collection<String> palNS) {
		super();
		noSignificativas = new TreeSet<>();
		for (String p: palNS) {
			noSignificativas.add(p.toUpperCase());
		}
	}

	public ContadorPalabrasSig(String nomFich, String del) throws FileNotFoundException {
		noSignificativas = new TreeSet<>();
		leerFicheroNoSig(nomFich, del);
	}
		
	
	private void leerFicheroNoSig(String nomFich, String del) throws FileNotFoundException {
		try (Scanner sc = new Scanner (new File(nomFich))) {
			leerPalabrasNoSignificativas(sc, del);
		}
	}
	
	private void leerPalabrasNoSignificativas(Scanner sc, String del) {
		while (sc.hasNextLine()) {
			String linea = sc.nextLine();
			try (Scanner scLinea = new Scanner (linea)) {
				scLinea.useDelimiter(del);
				while (scLinea.hasNext()) {
					String pal = scLinea.next();
					noSignificativas.add(pal.toUpperCase());
				}
			}
		}
	}
	
	@Override
	public void incluye(String pal) {
		String palM = pal.toUpperCase();
		if (!noSignificativas.contains(palM)) {
			super.incluye(pal);
		}
	}
}