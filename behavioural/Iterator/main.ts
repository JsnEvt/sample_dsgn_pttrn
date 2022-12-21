import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');
// console.log(dataStructure);

//Se nao usassemos esse metodo [Symbol.iterator](), daria erros na execucao
// destas linhas abaixo:

//Atribuicao via desestruturacao
const [a, b] = dataStructure; //.... dara erro!!

console.log('ROUBADOS:', a, b);
console.log('Executei varias coisas e depois usei o iterador');
const [c, ...rest] = dataStructure;
console.log(c, rest);

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}

// O ITERADOR LEMBRA DA POSICAO EM QUE TERMINOU A BUSCA/SELECAO ANTERIOR
// NA PROXIMA ITERACAO, ELE CONTINUARA A LEITURA A PARTIR DA POSICAO ATUAL.

console.log();
dataStructure.changeIterator(new MyReverseIterator(dataStructure));

for (const data of dataStructure) {
  console.log(data);
}

console.log();
