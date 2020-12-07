var agora = new Date()
var diaSem = agora.getDay()
var hora = agora.getHours()
var tempo = 'Boa'

if(hora<6){
    tempo = 'Boa madrugada!'
}else if(hora < 12){
    tempo = 'Bom dia!!'
}else if(hora <18){
    tempo = 'Boa tarde!!!'
}else{tempo = 'Boa noite!!!!'}

/* 
Domingo
Segunda
Terça
Quarta
Quinta
Sexta
Sábado
*/

switch(diaSem){
    case 0:
        console.log(`Hoje é Domingo e são ${hora} horas, ${tempo}`)
        break
    case 1:
        console.log(`Hoje é Segunda e são ${hora} horas, ${tempo}`)
        break
    case 2:
        console.log(`Hoje é Terça e são ${hora} horas, ${tempo}`)
        break
    case 3:
        console.log(`Hoje é Quarta e são ${hora} horas, ${tempo}`)
        break
    case 4:
        console.log(`Hoje é Quinta e são ${hora} horas, ${tempo}`)
        break
    case 5:
        console.log(`Hoje é Sexta e são ${hora} horas, ${tempo}`)
        break
    default:
        console.log(`Hoje é Sábado e são ${hora} horas, ${tempo}`)
        break
}