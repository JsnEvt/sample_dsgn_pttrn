import { Vehicle } from '../interfaces/vehicle';
import { Customer } from '../interfaces/customer';

export class IndividualCar implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) {}

  pickUp(): void {
    console.log(
      `${this.name} esta buscando ${this.customer.name} - Individual Car`
    );
  }
}
