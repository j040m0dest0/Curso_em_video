function tabuada(){
    let num = document.querySelector('input#txtn')
    let tab = document.getElementById('seltab')
    let res = document.querySelector('div#res')

    if(num.value.length == 0 ){
        res.innerHTML = `Por favor insira um numero \u{1F620}`
    }else{
        let n = Number(num.value)

        // Realizando com while

        // let c = 1 
        // tab.innerHTML = ''
        // while(c <= 10){
        //     let item = document.createElement('option')
        //     item.text = `${n} x ${c} = ${n*c}`
        //     item.value = `tab${c}`
        //     tab.appendChild(item)
        //     c++
        // }

        // Realizando usando FOR
        tab.innerHTML = ' realizando a tabuada'
        for(let c = 1 ; c <= 10 ; c++ ){
            let item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
                 //item.value = `tab${c}`
                 tab.appendChild(item)
        }

    }
}