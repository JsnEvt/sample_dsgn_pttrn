//O codigo cliente ira usar apenas a Factory.
//Se um endereco nao existir, ele o adiciona.
//Caso contrario ele usara o endereco existente.

import { DeliveryLocation } from './delivery-location';
import { DeliveryFlyweightProtocol } from './deliveryflyweightprotocol';
import {
  DeliveryLocationData,
  DeliveryLocationDictionary,
} from './delivey-types';

//A chave do objeto fara o link com o objeto em si.
//A chave sera por onde saberei o ID desse objeto.
//Isso e necessario para que eu possa puxar isso depois.
//Para que eu possar ver se a chave ja existe no objeto e retorna-la.

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  private createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, '').toLowerCase())
      .join('_');
  }

  //O metodo abaixo criara uma chave para o novo objeto, caso exista,
  //usara este objeto.
  makeLocation(
    intrinsicState: DeliveryLocationData
  ): DeliveryFlyweightProtocol {
    const key = this.createId(intrinsicState);
    if (key in this.locations) return this.locations[key];
    this.locations[key] = new DeliveryLocation(intrinsicState);
    return this.locations[key];
  }

  getLocation(): DeliveryLocationDictionary {
    return this.locations;
  }
}
