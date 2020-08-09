package SUDOKU;
import java.util.ArrayList;


public class IA {
	
	Caja[][] tabla = new Caja[9][9];
	
	public IA(Caja tabla[][]) {
		
		this.tabla = tabla;
	}

	
	// Empezaremos buscando los movimientos no validos o cajas ya ocupadas
	
	
	public void EncontrarInvalidos() {
		
		
		for (int x = 0; x < 9; ++x) {  // por cada fila y columna hacemos
			
			for (int y = 0; y < 9; ++y ) {
				
				ArrayList<Integer> NoValidos = new ArrayList<Integer>();
				
				Caja c = tabla[x][y];
				final int fila = x;
				final int columna = y;
				
				for (int k = 0; k < 9; k++ ) { // para todos los valores de la misma fila
					
					int valor = tabla[fila][k].getValor();
					if (valor != 0 && !NoValidos.contains(valor)) {
						
						NoValidos.add(valor); 
					}	// Asi añadimos al array de no validos los valores de las filas
				}
				
				for (int m=0; m<9; m++) { // esto seria para las columnas
					
					int valor = tabla[m][columna].getValor();
					if (valor != 0 && !NoValidos.contains(valor)) {
						
						NoValidos.add(valor);
						
					}
				}
				
				CheckRejilla(fila, columna, NoValidos); // tenemos que crear el metodo para comprobar las siguientes cuadriculas o rejillas
				c.setInvalidos(NoValidos);
				
				}
				
			}
		}
		
	
	public void CheckRejilla(int fila, int columna, ArrayList<Integer> NoValidos) {
		
		// Tenemos que crear 1 if por cada posible posicion en la rejilla de 3x3
		
		if ( fila <= 2 && columna <= 2 ) { // Esquina arriba izquierda
			
			for ( int i = 0; i <= 2; i++) {
				for ( int j=0; j <=2; ++j) {
					
					Caja c = tabla[i][j];
					if(!NoValidos.contains(c.getValor()) && c.getValor() != 0) {
						
						NoValidos.add(c.getValor());
					}
				}
			}
			
		}
		
		
if ( fila > 5 && columna <= 2 ) { // Esquina abajo izquierda
			
			for ( int i = 6; i <= 8; i++) {
				for ( int j=0; j <=2; ++j) {
					
					Caja c = tabla[i][j];
					if(!NoValidos.contains(c.getValor()) && c.getValor() != 0) {
						
						NoValidos.add(c.getValor());
					}
				}
			}
			
		}

if ( fila <= 5 && fila > 2 && columna <= 2 ) { // Centro izquierda
	
	for ( int i = 3; i <= 5; i++) {
		for ( int j=0; j <=2; ++j) {
			
			Caja c = tabla[i][j];
			if(!NoValidos.contains(c.getValor()) && c.getValor() != 0) {
				
				NoValidos.add(c.getValor());
			}
		}
	}
	
}

if ( fila <= 2 && columna > 5 ) { // Esquina arriba derecha
	
	for ( int i = 0; i <= 2; i++) {
		for ( int j=6; j <=8; ++j) {
			
			Caja c = tabla[i][j];
			if(!NoValidos.contains(c.getValor()) && c.getValor() != 0) {
				
				NoValidos.add(c.getValor());
			}
		}
	}
	
}

if ( fila > 5 && columna > 5 ) { // Esquina abajo derecha
	
	for ( int i = 6; i <= 8; i++) {
		for ( int j=6; j <=8; ++j) {
			
			Caja c = tabla[i][j];
			if(!NoValidos.contains(c.getValor()) && c.getValor() != 0) {
				
				NoValidos.add(c.getValor());
			}
		}
	}
	
}
		
if ( fila  >= 3 && fila <=5 && columna > 5 ) { // centro derecha
	
	for ( int i = 3; i <= 5; i++) {
		for ( int j=6; j <=8; ++j) {
			
			Caja c = tabla[i][j];
			if(!NoValidos.contains(c.getValor()) && c.getValor() != 0) {
				
				NoValidos.add(c.getValor());
			}
		}
	}
	
}	

if ( fila <=2 && columna > 2 && columna <= 5  ) { // centro arriba
	
	for ( int i = 0; i <= 2; i++) {
		for ( int j=3; j <=5; ++j) {
			
			Caja c = tabla[i][j];
			if(!NoValidos.contains(c.getValor()) && c.getValor() != 0) {
				
				NoValidos.add(c.getValor());
			}
		}
	}
	
}	

if ( fila > 5 && columna > 2 && columna <= 5 ) { // centro abajo
	
	for ( int i = 6; i <= 8; i++) {
		for ( int j=3; j <=5; ++j) {
			
			Caja c = tabla[i][j];
			if(!NoValidos.contains(c.getValor()) && c.getValor() != 0) {
				
				NoValidos.add(c.getValor());
			}
		}
	}
	
}

if ( fila >2 && fila <= 5 && columna > 2 && columna <=5 ) { // centro centro
	
	for ( int i = 3; i <= 5; i++) {
		for ( int j=3; j <=5; ++j) {
			
			Caja c = tabla[i][j];
			if(!NoValidos.contains(c.getValor()) && c.getValor() != 0) {
				
				NoValidos.add(c.getValor());
			}
		}
	}
	
}
	
	
	}	
	
// Ahora necesitamos el metodo IA.FUNCIONA que aparece en main

public boolean funciona() {
	
	boolean hecho = true;
	
		// vamos a necesitar unas variables que almacene las restricciones
		
		int maxRest = 0;
		int Restfila, RestColumna;
		
		Caja tablaRest = new Caja();
		
		for ( int a = 0; a <= 8; a++) {
			
			for ( int b = 0; b <=8 ; ++b) {
				
				Caja caja=tabla[a][b];
				if(caja.getValor()==0) {
					
					hecho = false;
					
					if(caja.getInvalidos().size() > maxRest )
						maxRest=caja.getInvalidos().size();
					
					tablaRest = caja;
				}
			}
		}
		
		
		if (hecho) 
			
			return true;
		
		
			ArrayList<Integer> NoValidos = tablaRest.getInvalidos();
			
			if (NoValidos.contains(1) && NoValidos.contains(2)
					&& NoValidos.contains(3) && NoValidos.contains(4)
					&& NoValidos.contains(5) && NoValidos.contains(6)
					&& NoValidos.contains(7) && NoValidos.contains(8)
					&& NoValidos.contains(9)) { 
				
				hecho = false;
				return hecho; 
			}
			
			for (int k=1; k <= 9; k++) {
				
				if (!NoValidos.contains(k)) {
					
					tablaRest.setValor(k);
					tabla[tablaRest.getFila()][tablaRest.getColumna()] = tablaRest;
					
					EncontrarInvalidos();
					
					if( funciona() == true) {
						
						return true;
						
					} else {
						
						tablaRest.setValor(0);
						
					}
				}
			}
			
			
			return hecho;
		
	
}
	

public void printTablero() {
	
	System.out.println();
	
			for (int i = 0; i < 9; i++) {
				
				if ( i == 3 || i == 6 || i==9 ) {
					
					System.out.println("                                     ");
					
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

	
}	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

