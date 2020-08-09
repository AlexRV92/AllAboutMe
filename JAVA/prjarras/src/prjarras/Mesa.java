package prjarras;

public class Mesa {
	
	private Jarra jarra1;
	private Jarra jarra2;
	
	
	public Mesa (int cap1, int cap2) {
		
		jarra1 = new Jarra(cap1);
		jarra2 = new Jarra(cap2);
		
		/*Constructor*/
		
	}
	
	public Mesa (Jarra j1, Jarra j2) {
		
		jarra1 = j1;
		jarra2 = j2;
		
		/* constructor si proporcionamos dos jarras*/
	} 
	
	public int capacidad(int num) {
		
		if(num ==1) {
			return jarra1.capacidad();
		} else if ( num == 2) {
			return jarra2.capacidad();
		} else {
			
			throw new RuntimeException("Error");
		}
	}
	public int contenido(int num) {
		
		if(num==1) {
			return jarra1.contenido();
		} else if (num==2) {
			
			return jarra2.contenido();
		} else {
			
			throw new RuntimeException("Error");
		}
	}
		
	public void llena (int num) {
		
		if (num ==1 ) {
			 jarra1.llena();
		} else if ( num==2) {
			 jarra2.llena();
		}else {
			
			throw new RuntimeException("Error");
		}
	}
		
	public void vacia (int num) {
		if (num==1) {
			 jarra1.vacia();
		} else if (num ==2) {
			 jarra2.vacia();
		} else {
			
			throw new RuntimeException ("Error");
		}
	}
	public void llenaDesde (int num) {
		
		if (num==1) {
			
			jarra2.llenaDesde(jarra1);
		} else if (num==2) {
			jarra1.llenaDesde(jarra2);
		}else {
			
			throw new RuntimeException("Error");		}
	}
	
	public String toString() {
		
		return "M(J1(" + jarra1.toString() + "), J2("+jarra2.toString()+"))";
	}
		

}
