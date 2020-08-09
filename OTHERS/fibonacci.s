.text
.global main


fib:

	push {r1-r4}
	cmp r0, #0         @compruebo si n es fib de 0
	moveq r0, #0
	beq salida

	cmp r0, #1	@ si es el fib de 1
	moveq r0, #1
	beq salida

	mov r1, #0     @ fib0
	mov r2, #1	@fib1
	mov r3, #1	@ este es el contador ahora

loop:

	cmp r0, r3 
	beq salir
	add r4, r1, r2 		@sumo en r4 los dos anteriores
	mov r1, r2		@actualizo el r1
	mov r2, r4		@actualizo el r2
	add r3, r3, #1		@ contador ++

	b loop 

salir:

	mov r0, r4	@muevo a r0 para salir por ahi
	beq salida

salida:

	pop {r1-r4}
	mov pc, lr
	
	
	
  