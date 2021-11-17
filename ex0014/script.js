 function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
  // var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`
    
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'manha.JPG'
        document.body.style.background = "#FFFF00"
        

    }else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.JPG'
        document.body.style.background = "#f1af09"

    }else{
        //boa noite
        img.src = 'noite.JPG'
        document.body.style.background = "#030024"
    }
}