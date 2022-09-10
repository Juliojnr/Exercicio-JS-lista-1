const prompt = require ('prompt-sync')();

    const A = prompt ('Valor de A: ');
    const B = prompt ('Valor de B: ');
    const C = prompt ('Valor de C: ');
    const D = prompt ('Valor de D: ');
    const E = prompt ('Valor de E: ');
    const F = prompt ('Valor de F: ');
    
    const X = ((C * E) - (B * F)) / ((A * E) - (B * D));
    const Y = ((A * F) - (C * D)) / ((A * E) - (B * D));

    console.log(`Valor de X: ${X}`)
    console.log(`Valor de Y: ${Y}`)