let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('ul#flista')
let res = window.document.querySelector('div#res')
let valores =[]



function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}


function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true 
        
    }else{
        return false 
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${Number(num.value)} adicionado`
       lista.appendChild(item)
       res.innerHTML = ''
    }else{
        window.alert('Valor inválido já encontrado na lista ')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }if (valores[pos] < menor){
                menor = valores[pos]
            }
            
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p class="mt-2" > Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p class="mt-2"> O maior valor informado foi: ${maior} </p>`
        res.innerHTML += `<p class="mt-2"> O menor valor encontrado foi: ${menor} </p>`
        res.innerHTML += `<p class="mt-2"> Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p class="mt-2"> A média de todos os valores é:${media} </p>`
    
    
    }
}