const prompt = require ('prompt-sync')();

    const firstNote = prompt ('Digite a primeira Nota: ');
    const secondNote = prompt ('Digite a segunda Nota: ');
    const thirdNote = prompt ('Digite a terceira Nota: ');

        const weight1 =  2
        const weight2 =  3
        const weight3 =  5

        const average1 = firstNote * weight1
        const average2 = secondNote * weight2
        const average3 = thirdNote * weight3

        const averageTotal = (average1 + average2 + average3) / 10

    console.log(`Média ponderada do aluno: ${averageTotal}`)


