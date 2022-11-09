const controles = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');

const pecas = {
   "bracos": {
       "forca": 29,
       "poder": 35,
       "energia": -21,
       "velocidade": -5
   },

   "blindagem": {
       "forca": 41,
       "poder": 20,
       "energia": 0,
       "velocidade": -20
   },
   "nucleos":{
       "forca": 0,
       "poder": 7,
       "energia": 48,
       "velocidade": -24
   },
   "pernas":{
       "forca": 27,
       "poder": 21,
       "energia": -32,
       "velocidade": 42
   },
   "foguetes":{
       "forca": 0,
       "poder": 28,
       "energia": 0,
       "velocidade": -2
   }
}

controles.forEach((elementos)=> {
   elementos.addEventListener('click', (evento) =>{
      manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
      atualizaEstatistica(evento.target.dataset.peca, evento.target.parentNode, evento.target.dataset.controle);
   });
});

function manipulaDados(operacao, controle) {
   const peca = controle.querySelector('[data-contador]');
   // console.log(peca.value)
   if(operacao === '-') {
      if (peca.value > 0 ){
         peca.value = parseInt(peca.value) - 1;
      }
   } else if(peca.value < 12){
      peca.value = parseInt(peca.value) + 1
   }
}

function atualizaEstatistica(peca, controlador, operacao) {
   const  controle = controlador.querySelector('[data-contador]');
   const titulo = document.querySelectorAll('.estatistica-titulo');
   console.log(controle.value);

   estatisticas.forEach((elementos)=> {

      if (operacao === '-') { 
         if(controle.value > 0) {
            elementos.textContent = parseInt(elementos.textContent) - pecas[peca][elementos.dataset.estatistica];
         }
      } else if(operacao === '+') {
         if(controle.value < 12) {
            elementos.textContent = parseInt(elementos.textContent) + pecas[peca][elementos.dataset.estatistica];
         }
      }
      if(parseInt(elementos.textContent) < 50) {
         elementos.style.color = 'red';
      } else {
         elementos.style.color = 'blue';
      }
   });
}

function trocaImagem(cor) {
   document.querySelector('.robo').src = 'img/Robotron 2000 - '+cor+'/Robotron 2000 - '+cor+'.png';

}