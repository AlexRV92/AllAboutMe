.text


mov r0, #4

cuad:

	cmp r0, #1 	@al ser recursiva necesitamos una condicion de salida
	movlt pc, lr	@Movemos el pequeño a pc, para que repita con el siguiente
	push {r0, lr}	@mandamos a la pila el r0 y lr para no perder por donde vamos
	
	sub r0, r0, #1 	@restar a r0, r0-1 
	bl cuad		@para que repita

	pop {r1, lr}	@Recuperamos el lr que teniamos en la pila 
	mul r1, r1, r1	@hacemos el cuadrado
	add r0, r1, r0	@es igual a r0 = r1+r0

	mov pc, lr	@movemos de nuevo lr a pc para que salte al ultimo push de lr

	