import { deliveryContext } from './delivery-context';
import { DeliveryFactory } from './delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Gomes', '74', 'Av.E.B.Melo', 'Guararapes');
deliveryContext(factory, 'Sarah', '26A', 'Av.E.B.Melo', 'Guararapes');
deliveryContext(factory, 'Simone', '502', 'Av.Lara Santos', 'Olinda');

console.log();
console.log(factory.getLocation());
