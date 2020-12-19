function contar(){
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

  if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    alert('[ERRO] Imposssível contar! inicie os valores novamente')
    res.innerHTML='Impossível Contar!'

  }else{
     res.innerHTML= 'Contando:'
     let i = Number(inicio.value)
     let f = Number(fim.value)
     let p = Number(passo.value)
    if(p <= 0) {
        alert('Passo inválido! Considerando Passo 1')
        p = 1
    }
    if(i < f ){
        //Contagem Crescente
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c}  \u{1F449}`
        }   
    }else{
        //Contagem regressiva
        for(let c = i; c>= f; c -=p){
            res.innerHTML +=`${c} \u{1f449} `
        }
    }
    res.innerHTML += `\u{1F3C1} `
  }
}