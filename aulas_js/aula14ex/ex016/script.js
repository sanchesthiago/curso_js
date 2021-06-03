function contar (){
    var ini = Number (document.querySelector('input#inicio').value)
    var fim = Number (document.querySelector('input#fim').value)
    var pas = Number (document.querySelector('input#passo').value) 
    var res = document.querySelector('div#res')   
   if(ini == 0 || fim == 0 || pas == 0){
    res.innerHTML ='Impossivel Contar!'
   } else {
       if(ini < fim){
           //contagem crescente
           for(var c = ini; c <= fim; c += pas){
            res.innerHTML += `${c} \u{1F4BB} `       
        } 

       } else {
           // Contagem Regressiva
           res.innerHTML ='Contando: '
        for(var c = ini; c >= fim; c += pas){
             res.innerHTML += `${c} \u{1F4BB} `              
             
        } 

        
       }
        
    }
   
}