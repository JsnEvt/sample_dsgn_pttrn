import { MyDatabaseClassic } from './my-database-classic';
import './moduleA';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: 'Pedro', age: 45 });
myDatabaseClassic.add({ name: 'Cyro', age: 66 });
myDatabaseClassic.add({ name: 'Everton', age: 38 });
myDatabaseClassic.show();

//A instancia ja foi iniciada em moduleA, foi importada para o moduleB e
//ja obteve a instancia existente e prosseguiu adicionando os dados.
