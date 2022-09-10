const prompt = require('prompt-sync')();


    const anosString = prompt ('Quantos anos você tem: ');
        const anosNumber = Number(anosString);

    const mesesString =  prompt ('Quantos meses: ');
        const mesesNumber = Number(mesesString);

    const diasString = prompt ('Quantos dias: ');
        const diasNumber = Number(diasString);

    let idadeEmDiasNumber = (anosNumber * 365) + (mesesNumber * 12) + (diasNumber)

        console.log(`Você ja viveu: ${idadeEmDiasNumber} dias`);
    
    