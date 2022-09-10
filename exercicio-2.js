const prompt = require('prompt-sync')();

const totalDias = prompt('Total de dias vividos: ')

const anos = parseInt (totalDias/365)
const meses = parseInt ((totalDias % 365) / 30)
const dias = (totalDias % 365) % 30

console.log(`Você tem ${anos} anos, ${meses} meses e ${dias} dias.`)
