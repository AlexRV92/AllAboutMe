.data
 tam:        .word 8
 vect:       .word 64,25,9,23,56,77,87,100
 res:        .word 0

 .text
 .global main
 main:       push {lr}
             ldr r0, =vect          @ en r0 metemos el array vect
             ldr r1, =tam	    @ r1 = tamaño del array 
             ldr r1, [r1]           @ 
             ldr r4, =res           @ respuesta en r4
             bl evencount           
        str r0, [r4]           @ Guardamos el resultado en res
                 bx lr                  @ Finalizamos el programa


 iseven:     @ Para saber si es par o no usamos el even
             
             mov r1, r0
             mov r2, #1
             and r3, r2, r1
             eor r0, r3, #1
             bx lr


 evencount: 
            push {lr}
            push {r4-r11}
            mov r5, r1
            mov r6, r0
            mov r7, #0
loop:            cmp r5, #0
            beq sal
            ldr r0, [r6], #4
            bl iseven
            cmp r0, #1
            addeq r7, #1
            sub r5, #1
            b loop

sal:
            mov r0, r7

            pop {r4-r11}
            pop {lr}
            bx lr