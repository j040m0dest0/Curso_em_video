let amigo = {nome: 'jose',
sexo : 'M',
peso: 85.5,
engordar (p=0){
    console.log('engordou')
    this.peso += p
    
}}

amigo.engordar(3)
console.log(`${amigo.nome } pesa ${amigo.peso} do sexo ${amigo.sexo}`)