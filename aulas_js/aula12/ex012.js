var agora = new Date ()
var hora = agora.getHours ()
console.log (`Agora são exatamente ${hora} horas`)
if(hora < 12) {
    console.log('Agora é de Manhã, Bom dia')
}

else if (hora <= 18){ 
    console.log('Agora é de tarde, Boa tarde')
}

else if(hora > 18){
    console.log('Agora é de Noite, Boa Noite')
}

else if (hora >= 23) {
    console.log('Agora é de Madrugada, Boa Madrugada')
}
   

    

   