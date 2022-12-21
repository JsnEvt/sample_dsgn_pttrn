//Aqui crio uma funcao para contextualizar o padrao de projeto Flyweight

import { DeliveryFactory } from './delivery-factory';

export const deliveryContext = function (
  factory: DeliveryFactory,
  name: string,
  number: string,
  street: string,
  city: string
): void {
  const location = factory.makeLocation({ street, city });
  location.delivery(name, number);
};
