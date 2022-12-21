import { IndividualCustomer } from '../customer/individual-customer';
import { Customer } from '../interfaces/customer';
import { CreateVehicleCustomerFactory } from '../interfaces/customer-vehicle-factory';
import { Vehicle } from '../interfaces/vehicle';
import { IndividualCar } from '../vehicle/individual-car';

export class IndividualCreateVehicleCustomerFactory
  implements CreateVehicleCustomerFactory
{
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
