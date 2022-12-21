export interface PrototypeProtocol {
  clone(): PrototypeProtocol;
}

export class Person implements PrototypeProtocol {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map((item) => item.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements PrototypeProtocol {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address1 = new Address('Av.das Nacoes', 360);
const person1 = new Person('Marcos', 25);
person1.addAddress(address1);
console.log('#####');
const person2 = person1.clone();

person1.addresses[0].street = 'Av. Transatlantico';

person2.name = 'Luiz Calado';
person2.age = 32;
console.log(person1);
console.log(person1.addresses);

console.log('######');
console.log(person2.name);
console.log(person2.addresses);

//obj = _.cloneDeep(objPrototype)
