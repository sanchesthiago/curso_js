function carregar () {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 12   
    msg.innerHTML = `Agora são ${hora} Horas`

    if (hora >=0 && hora <12 ){        
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#F9DA87'
        msg1.innerHTML = '<strong> Bom dia </strong>'
        msg1.style.backgroundColor='#FCF6E5'

    }else if(hora >= 12 && hora <= 18 ){
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = '#CF6D39'
        msg1.innerHTML = ' <strong> Boa tarde </strong>' 
        msg1.style.backgroundColor = '#EDA880'       
        
    }else {
        // Boa Noite
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor ='#283742'
        msg1.innerHTML = '<strong> Boa noite </strong>'
        msg1.style.backgroundColor ='#606466'
    }

}
