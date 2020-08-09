package SUDOKU;
import java.util.ArrayList;
import java.util.Collections;




public class main {		// Este va a ser nuestro main
	
	
	// Creamos una variable para el tiempo, que sea estatica
	// 3 variables, el tiempo inicial, final y total
	
	static long Tini=0, Tfinal=0, Ttotal=0;

	public static void main(String[] args) {
		
		//Mediante array pasaremos el sudoku a resolver al programa
		
		ArrayList<Integer> SudokuMapa = new ArrayList <Integer>();
		Collections.addAll(SudokuMapa,	// El segundo parametro sera el mapa de 9x9
				5,3,0,0,7,0,0,0,0,
				6,0,0,1,9,5,0,0,0,
				0,9,8,0,0,0,0,6,0,
				8,0,0,0,6,0,0,0,3,
				4,0,0,8,0,3,0,0,1,
				7,0,0,0,2,0,0,0,6,
				0,6,0,0,0,0,2,8,0,
				0,0,0,4,1,9,0,0,5,
				0,0,0,0,8,0,0,7,9);  // Sudoku ejemplo sacado de google imagenes
		
		Tablero su= new Tablero(SudokuMapa);
		IA resuelve = new IA(su.Pasartabla()); // Le pasamos el estado inicial del tablero a la IA
		resuelve.EncontrarInvalidos();
		Tini=System.currentTimeMillis();
		
		//Ahora necesitariamos saber si es posible o no resolver el sudoku
		
		if(resuelve.funciona()) {
			
			Tfinal=System.currentTimeMillis();
			Ttotal = Tfinal-Tini;
			System.out.println("Resuelto en " +Ttotal+ "ms");
			//Imprimimos la solucion del sudoku
			su.printTablero();
			
		} else { // Los demas casos no tendran solucion 
			
			System.out.println("No he encontrado una solucion o el tablero es incorrecto ");
			
		}
		

	}

}
