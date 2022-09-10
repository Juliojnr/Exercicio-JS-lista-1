const prompt = require('prompt-sync')();

    console.log('Digite três números inteiros e positivos')

        const A = parseInt (prompt ('Digite o primeiro número: '))
        const B = parseInt (prompt ('Digite o segundo número: '))
        const C = parseInt (prompt ('Digite o terceiro número: '))

        const R = Math.pow(A + B, 2)
        const S = Math.pow(B + C, 2)
        
        const D = (R + S) / 2

    console.log(`Resultado da expressão D = (R + S) / 2 = ${D}`)
