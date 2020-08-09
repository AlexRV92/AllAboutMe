import prjarras.Mesa;

public class EjemploUsoMesa1 {
	
	
	public static void main(String [] args ) {
		Mesa mesa= new Mesa(5,7);
		
		/*Creamos el objeto mesa, pasandole los parametros de las jarras*/
		
		System.out.println(mesa);
		System.out.println();
		
		mesa.llena(1);
		
		System.out.println(mesa);
		System.out.println();
		
		mesa.llenaDesde(1);
		System.out.println(mesa);
		System.out.println();
		
		/* llenamos la jarra 2 con 5 litros de la 1*/
		
		mesa.llena(1);
		
		System.out.println(mesa);
		System.out.println();
		
		// Ahora tenemos la jarra 1 con 5 y la 2 con 5
		
		mesa.llenaDesde(1);
		
		System.out.println(mesa);
		System.out.println();
		// J1 3, j2 7
		
		mesa.vacia(2);
		
		System.out.println(mesa);
		System.out.println();
		
		// j1 3, j2 0
		
		mesa.llenaDesde(1);
		
		System.out.println(mesa);
		System.out.println();
		
		// j1 0, j2 3
		
		mesa.llena(1);
		
		System.out.println(mesa);
		System.out.println();
		
		// j1 5, j2 3
		
		mesa.llenaDesde(1);
		
		System.out.println(mesa);
		System.out.println();
		
		// j1 1, j2 7
		
		

}
}