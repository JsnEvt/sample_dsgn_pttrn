import { MyDefaultIterator } from './my-default-iterator';
import { MyIteratorProtocol } from './my-iterator-protocol';

export class MyDataStructure {
  private _items: string[] = [];
  private iterator: MyIteratorProtocol<string> = new MyDefaultIterator(this);

  addItem(...items: string[]): void {
    items.forEach((item) => this._items.push(item));
  }

  //com o metodo get separado, e necessario mudar o atributo para privado.
  get items(): string[] {
    return this._items;
  }

  size(): number {
    return this._items.length;
  }

  changeIterator(iterator: MyIteratorProtocol<string>): void {
    this.iterator = iterator;
  }

  //Aqui temos algo diferente, ao inves de usar o metodo createIterator, faremos assim:

  [Symbol.iterator](): MyIteratorProtocol<string> {
    // this.iterator.reset() ASSIM, ZERO O ITERADOR TODA VEZ QUE FOR CHAMADO.
    return this.iterator;
  }

  resetIterator(): void {
    this.iterator.reset();
  }
}
