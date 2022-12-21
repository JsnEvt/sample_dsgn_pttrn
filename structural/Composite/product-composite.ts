export abstract class ProductComponent {
  abstract getPrice(): number;

  // add(products: ProductComponent): void {}
  // remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }
  getPrice(): number {
    return this.price;
  }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];
  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }
  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }
  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

const camiseta = new ProductLeaf('Camiseta', 40);
const tablet = new ProductLeaf('Bicicleta', 2000);
const smartphone = new ProductLeaf('Smartphone', 1500);
const productBox = new ProductComposite();
productBox.add(camiseta, tablet, smartphone);
console.log(productBox);
console.log(productBox.getPrice());

const notebook = new ProductLeaf('Notebook', 4000);
const kindle = new ProductLeaf('Kindle', 500);

const anotherProductBox = new ProductComposite();
anotherProductBox.add(notebook, kindle);

productBox.add(anotherProductBox);

console.log(productBox);
console.log(productBox.getPrice());
