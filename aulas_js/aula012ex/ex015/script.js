function verificar() {
    //window.alert('Funcionou')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano ) {// primeiro valida se foi digitado algo e dpois se o ano digitado é maior q o atula
        window.alert('Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)    
        var genero = ''    
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
        var genero = 'Homem' 
            if(idade >=0 && idade <10){
                //crianca
                img.setAttribute('src', 'bebe_m.png')
            }else if(idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem_m.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto_m.png')
            }else{
                // Idoso
                img.setAttribute('src', 'velho_m.png')
            }
        } else if(fsex[1].checked){
        var genero = 'Mulher'
        if(idade >=0 && idade <10){
            //crianca
            img.setAttribute('src', 'bebe_f.png')
        }else if(idade >= 10 && idade < 21) {
            // jovem
            img.setAttribute('src', 'jovem_f.png')
        }else if(idade < 50){
            //adulto
            img.setAttribute('src','adulto_f.png')
        }else{
            // Idoso
            img.setAttribute('src', 'velho_f.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    }
}