const prompt = require ('prompt-sync')();

    const x2 = prompt ('Digite x2: ');
    const x1 = prompt ('Digite x1: ');

    const y2 = prompt ('Digite y2: ');
    const y1 = prompt ('Digite y1: ');

        const R = Math.pow(x2 - x1, 2);
        const S = Math.pow(y2 - y1, 2);

    console.log(`Valor de R: ${R}`);
    console.log(`Valor de S: ${S}`);

        const total =  R + S;

    console.log(`Valor de total: ${total}`);

    const raiz = Math.sqrt(total);

    console.log(`Raiz quadrada de ${total} = ${raiz}`)


