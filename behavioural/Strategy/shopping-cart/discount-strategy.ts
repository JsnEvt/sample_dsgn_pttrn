// O bloco abaixo esta sendo criado para servir de interface para outros descontos.
// do jeito que esta aqui, ele nao faz nada.

import { ECommerceShoppingCart } from './ecommerce-shopping-cart';

// apenas esta criado.
export class DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    return cart.getTotal();
  }
}
