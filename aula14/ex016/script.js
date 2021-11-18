function contar() {
     let begin = document.querySelector('input#txtbegin')
     let end = document.querySelector('input#txtend')
     let step = document.querySelector('input#txtstep')
     let res = document.getElementById('res')

    // let begin = document.getElementById('txtbegin')
    // let end = document.getElementById('txtend')
    // let step = document.getElementById('txtstep')

    if (begin.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        //window.alert('[ERRO] Favor preencher os dados')
        res.innerHTML = `<b>[ERROR]</b> Favor inserir os dados corretamente \u{1F620}`
        

        }else{
            res.innerHTML = 'Contando : <br> '
            let i = Number(begin.value)
            let e = Number(end.value)
            let s = Number(step.value)

            if(s <= 0){
                window.alert('Pula invalido ! Considerando PULA 1')
                s = 1
            }
            if(i < e){

                //contagem crescente
                    for(let c = i;c <= e;c += s){
                    res.innerHTML += `\u{1F449} ${c} `
                }
                //contagem decescente  
            }else{
                for(let c = i;c >= e;c -= s){
                    res.innerHTML += `\u{1F449} ${c} `
                }
            }
            res.innerHTML += `\u{1F3C1}`
        
        }        
}
