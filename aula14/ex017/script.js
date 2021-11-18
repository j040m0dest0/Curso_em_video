function tabuada(){
    let num = document.querySelector('input#txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0 ){
        alert('Pro favor, digite um numero')
    }else{
        let n = Number(num.value)

        // Realizando com while

        let c = 1 
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }

    }
}