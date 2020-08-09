package prDatos;

import java.util.Arrays;

public class Datos {
	
	private double[] numeros;
	private String[] errores;
	
	double min;
	double max;
	
	// Constructor
	
	public Datos(String[] datos, double min, double max) {
		
		procesarDatos(datos);
		this.min = min;
		this.max = max; 
	}
	
	public double calcMedia() { // SUMA/X VECES
		
		double total = 0;
		int veces = 0;
		
		for ( int i=0; i < numeros.length; ++i) {
			
			if(min <= numeros[i] && numeros[i] <= max) {
				
				total += numeros[i];
				++veces;
			}
		}
		
		if ( veces==0) {
			
			throw new DatosException("No hay datos");
			
		}
		
		return total/veces; 
	}
	
	public double calcDesvTipica() { // Necesito la media + el array de numeros
		
		double media = this.calcMedia();
		double total = 0;
		int veces = 0;
		
		
		for ( int i=0; i< numeros.length; ++i) {
			
			if ( min <= numeros[i] && numeros[i] <= max) {
				
				total += Math.pow(numeros[i]-media, 2);
				++ veces;
				
			}
		}
		
		return Math.sqrt(total/veces);
		
	}
	
	public void setRango(String rango) {
		
		try { 
			// usaremos indexof para encontrar la posicion
			int x = rango.indexOf(';');
			
			min = Double.parseDouble(rango.substring(0, x));
			max = Double.parseDouble(rango.substring(x+1)); // Coloca el max despues
			
		} catch (IndexOutOfBoundsException error) {
			throw new DatosException ("Error, faltan valores");
		}catch (NumberFormatException error) {
			throw new DatosException ("Error en un valor, formato incorrecto");
		}catch(Exception error) {
			throw new DatosException(error.getMessage());
			}
		}
	
	
	public double[] getDatos() {
		
		return numeros;
	}
	
	public String[] getErrores() {
		
		return errores;
	}
	
	@Override public String toString() {
		
		String cadena = "Min: " +min+", Max: " +max+ "\n";
		cadena += Arrays.toString(numeros);
		cadena += "\n";
		cadena += Arrays.deepToString(errores);
		cadena += "\n";
		
		try { 
			cadena += "Media: " +calcMedia();
		}catch(Exception error) {
			cadena += "Media: ERROR";
		}
		
		try { 
			
			cadena += "DesvTipica: " + calcDesvTipica();
		}catch(Exception error) {
			cadena += "DesvTipica; ERROR";
			
		}
		return cadena;
		
	}
	
	private void procesarDatos(String[] num) {
		
		int numeroDatos = 0;
		int numeroErrores = 0;
		numeros = new double[num.length];
		errores = new String[num.length];
		for (String d : num) {
		try {
		numeros[numeroDatos] = Double.parseDouble(d);
		++numeroDatos;
		} catch (Exception error) {
		errores[numeroErrores] = d;
		++numeroErrores;
		}
		}
		numeros = Arrays.copyOf(numeros, numeroDatos);
		errores = Arrays.copyOf(errores, numeroErrores);
		}

	}
	
	
	
	


