import prjarras.Jarra;

public class EjemploUsoJarras1 {
	
	public static void main (String[] args ) {
		
		prjarras.Jarra jA = new Jarra(7);
		System.out.println("jA"+ jA);
		
		prjarras.Jarra jB = new Jarra(4);
		System.out.println ("jB"+jB);
		
		
		jA.llena();
		System.out.println("jA"+ jA);
		System.out.println ("jB"+jB);
		
		/* lleno la jarra A y muestro las 2 jarras de nuevo*/
		
		jB.llenaDesde(jA);
		
		System.out.println("jA"+ jA);
		System.out.println ("jB"+jB);
		
		jB.vacia();
		System.out.println("jA"+ jA);
		System.out.println ("jB"+jB);
		
		jB.llenaDesde(jA);
		System.out.println("jA"+ jA);
		System.out.println ("jB"+jB);

		
	}

}
