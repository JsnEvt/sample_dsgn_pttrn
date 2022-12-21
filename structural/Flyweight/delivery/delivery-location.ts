//Aqui sao criados os dados INTRINSECOS que serao compartilhados com outros objetos.

import { DeliveryLocationData } from './delivey-types';
import { DeliveryFlyweightProtocol } from './deliveryflyweightprotocol';

export class DeliveryLocation implements DeliveryFlyweightProtocol {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  delivery(name: string, number: string): void {
    console.log('Entrega para %s', name); // o placeholder %s, significa o parametro name recebido no metodo.
    console.log('Em', this.intrinsicState.street, this.intrinsicState.city);
    console.log('Numero:', number);
    console.log('#####');
  }
}
