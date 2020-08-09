package SUDOKU;
import java.util.ArrayList;

public class Tablero {

	
	// El tablero del sudoku esta dividido en celdas o cajas de 9x9
	// por lo que necesitaremos crear la variable de la caja
	//Vamos a necesitar tambien la clase CAJA para definirla
	
	Caja tabla[][] = new Caja[9][9];
	
	public Tablero(ArrayList<Integer> SudokuMapa) {
		
		//Comprobamos que sea 9x9 el tablero
		
		if (SudokuMapa.size() == 81 ) {
			
			int contador=0; // Necesitamos aux para dividir el mapa en cajas
			
			for (int i=0; i < 9; ++i) {
				
				for(int j=0; j <9; ++j) {
					
					int aux = SudokuMapa.get(contador);
					tabla[i][j] = new Caja();
					tabla[i][j].setValor(SudokuMapa.get(contador));
					tabla[i][j].setCoordenadas(i,j);
					contador++;
					
				}
			}
			
			
		} else { 
			
			System.out.println("Sudoku no valido, recuerda que debe ser 9x9");
			
		}
		
		printTablero();
	}
	
	
	public void printTablero() { 
		
		for(int i=0; i <9; ++i) {
			
			if ( i==3 || i == 6 || i == 9 ) {  //Si la altura  es igual a i 
				System.out.println("                                     ");
				    
				// Pintamos en blanco para separar cada 3 lineas
			}
			
			for (int j=0; j <9; j++) {
				
				if( j==2 || j==5 || j==8) {
					
					System.out.print(tabla[i][j].getValor()+ " || "); // Con esto "dibujamos" las cajas, cada 3 habra una doble
					
				} else { 
					
					System.out.print(tabla[i][j].getValor()+ " | ");
					
				}
			}
			
			System.out.println();
		}
	}
	
	
	
	public Caja[][] Pasartabla(){
		
		return tabla;
	}
	
	public boolean resuelto() {
		
		boolean resuelto = true;
		
		for ( int i= 0; i < 9; i++) {
			
			for (int j=0; j < 9; j++) {
				
				if (tabla[i][j].getValor()==0) {
					
					resuelto = false;
					
				}
			}
		}
		
		return resuelto;
	}
}
