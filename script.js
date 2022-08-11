//Função para calcular a soma de todos os valores s inteiros
// divisíveis por 3 ou 5 que sejam inferiores ao número passado.
function calcular(){
  var valorInput = document.getElementById('input')
  var resultado = 0
  for(var i = 0; i < valorInput.value; i++){
    if(((i % 3) === 0) || ((i % 5) === 0)){
      resultado += i
    }
  }
  atualizaResultado(resultado)
}

//Função para atualizar tag h1 com resultado da função 'calcular()'
function atualizaResultado(resultado){
  var h1 = document.getElementById('h1_id')
  h1.innerHTML = resultado;
}
