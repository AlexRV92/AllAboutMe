package SUDOKU;
import java.util.ArrayList;



public class Caja {
	
	
	// Las cajas o celdas estan formadas por diferentes variables
	//  columna, fila y el valor que contienen
	
private int fila, columna, valor;

private ArrayList<Integer> NoValidos= new ArrayList<Integer>();

public Caja(int fila, int columna, int valor) {
	
	this.fila= fila;
	this.columna= columna;
	this.valor = valor;
	
}

public Caja() { } // Constructor sin parametros



// Metodos necesarios que hemos usado en tablero y algunos
public void setValor(int valor) {
									// Colocamos el valor de la variable valor
	this.valor = valor;
	
}

public int getValor() {		// Nos devuelve el valor  de la variable
	
		return valor;
		
}


public int getColumna() {
	
	return columna;					// Nos devuelve la fila y la columna
}

public int getFila() {
	
	return fila;
	
	
}

public void setCoordenadas(int fila, int columna) {
													// Metodo para establecer coordenadas de posicion
	this.fila = fila;
	this.columna = columna;
}



public void setInvalidos(ArrayList<Integer> NoValidos) {
	
	this.NoValidos=NoValidos;
	
}

public ArrayList<Integer> getInvalidos(){
	
	return NoValidos;
}















}
