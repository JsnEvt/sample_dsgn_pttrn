import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { Customer } from '../interfaces/customer';
import { CreateVehicleCustomerFactory } from '../interfaces/customer-vehicle-factory';
import { Vehicle } from '../interfaces/vehicle';
import { EnterpriseCar } from '../vehicle/enterprise-car';

export class EnterpriseCreateVehicleCustomerFactory
  implements CreateVehicleCustomerFactory
{
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
