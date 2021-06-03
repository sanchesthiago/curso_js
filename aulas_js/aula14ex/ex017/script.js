function gerar(){
    var tab = Number (document.querySelector('input#tabuada').value)
    var res = document.querySelector('select#res')
    if(tab == 0){
        window.alert ('Digite um Número')

    }else{
        res.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            var mult =tab*c 
            //window.alert(`${tab}x${c} = ${mult}`)
           var item = document.createElement('option')
           item.text = `${tab}x${c} = ${mult}`
           item.value = `tab${c}`
           res.appendChild(item)     
          
            

        }
        
    }
    
}