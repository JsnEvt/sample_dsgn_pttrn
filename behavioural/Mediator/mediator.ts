import { Seller } from './seller';
import { SellerProduct } from './seller-product';

export class Mediator {
  private sellers: Seller[] = [];

  addSeller(...sellers: Seller[]): void {
    sellers.forEach((seller) => {
      this.sellers.push(seller);
      seller.setMediator(this); // CASO QUEIRA ADICIONAR UM VENDEDOR QUE COMPRE PARA SI MESMO COMO
      // OCORRE NO MERCADOLIVRE.
    });
  }

  // O BUY DA CLASSE MEDIATOR FAZ O SELLER VENDER O PRODUTO.
  buy(id: string): SellerProduct | void {
    let product;

    for (let i = 0; i < this.sellers.length; i++) {
      product = this.sellers[i].sell(id);

      if (product) {
        console.log(
          'Aqui esta: ID',
          product.id,
          'produto:',
          product.name,
          'preco:',
          product.price
        );
        return;
      }
    }
    console.log('Nao encontrei algum produto com id:', id);
  }

  showProducts(): void {
    this.sellers.forEach((seller) => seller.showProducts());
  }
}

//O SELLER VENDE NO ML MAS EXISTINDO UM MEDIADOR COMO O ML, O SELLER PODERA
//REALIZAR COMPRAS. EIS O MOTIVO DA EXISTENCIA DO METODO BUY() NA CLASSE MEDIATOR E
//SELL() NA CLASSE SELLER.
