//Aqui teremos os protocolos que serao utilizados em outros lugares.
// observe que exportamos outros TIPOS de conteudo. EXPORT TYPE
// DeliveryLocation contem os dados intrinsecos. E sera o tipo do
// intrinsicState do DeliveryLocation

import { DeliveryLocation } from './delivery-location';

export type DeliveryLocationData = {
  readonly street: string;
  readonly city: string;
};

export type DeliveryLocationDictionary = { [key: string]: DeliveryLocation };
