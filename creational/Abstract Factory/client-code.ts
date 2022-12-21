import { EnterpriseCreateVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCreateVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';

const entrepriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const car1 = entrepriseFactory.createVehicle('Palio', 'Jason');
const car2 = individualFactory.createVehicle('Uno', 'Ailza');
const car3 = entrepriseFactory.createVehicle('Montana', 'Severino');

car1.pickUp();
car2.pickUp();
car3.pickUp();
