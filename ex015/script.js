function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res =document.querySelector('div#res')

   if(fano.value.length == 0 || Number(fano.value) > ano){
       window.alert('[ERRO] Verifique os dados e tente novamente! ')
   }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

       if(fsex[0].checked){
           genero = 'Homem'
           if(idade >= 0 && idade < 10) {
               //criança
               img.setAttribute('src', 'bebe-homem.jpg')
           }else if(idade < 21){
               //jovem
               img.setAttribute('src', 'crianca-homem.jpg')

           }else if(idade < 65){
               //adulto
               img.setAttribute('src', 'homem-adulto.jpg')

           }else if(idade < 100){
               //idoso
               img.setAttribute('src', 'velho.jpg')

           }
           else{
            img.setAttribute('src', 'silvinho.jfif')
           }

       }else if(fsex[1].checked){
           genero = 'Mulher'

           if(idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'bebe-mulher.jpg')
            
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'crianca-mulher.jpg')

            }else if(idade < 65){
                //adulto

                img.setAttribute('src', 'mulher-adulta.jpg')

            }else if(idade < 100){
                    img.setAttribute('src', 'velha.jpg')

            }else{
                img.setAttribute('src', 'goku.jfif')

            }

         }
  
       else{
           genero = 'Outros'
           if(idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'nao-binario.jpg')

        }else if(idade < 21){
            //jovem
            img.setAttribute('src', 'nao-binario.jpg')


        }else if(idade < 65){
            //adulto
            img.setAttribute('src', 'nao-binario.jpg')

        }else{
            //idoso
            img.setAttribute('src', 'nao-binario.jpg')

        }

       }
       res.style.textAlign = 'center'
       res.innerHTML = ` Detectamos ${genero} com ${idade} anos </br>`
       res.appendChild(img)
   }
}