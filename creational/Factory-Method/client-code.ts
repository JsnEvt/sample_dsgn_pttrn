import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

const customerNames = [
  'Ana',
  'Joana',
  'Helena',
  'Ailza',
  'Carmem',
  'Jason',
  'Diego',
  'Claudio',
];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  // O metodo pickUp no arquivo vehicleFactory.ts, nao tinha sido usado ate entao
  // abaixo usaremos como exemplo:
  console.log('-----');
  const carFactory = new CarFactory();
  const newCar = carFactory.pickUp(name, `NOVO CARRO ${randomNumbers(100)}`);
  newCar.stop();
  //acima, o newCar ja chama o metodo pickUp.
}
