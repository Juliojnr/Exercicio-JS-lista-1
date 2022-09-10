const prompt = require('prompt-sync')();

    const secondTime = prompt ('Tempo em segundos do evento: ');

        const hours = parseInt (secondTime / 3600);
        const minutes = parseInt ((secondTime % 3600) / 60);
        const seconds = (secondTime % 3600) % 60;

    console.log (`O eventou durou ${hours} horas, ${minutes} minutos e ${seconds} segundos.`);

