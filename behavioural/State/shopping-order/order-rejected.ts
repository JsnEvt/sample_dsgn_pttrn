import { ShoppingOrderStateProtocol } from '../interface/shopping-order-state';
import { ShoppingOrder } from './shopping-order';

export class OrderRejected implements ShoppingOrderStateProtocol {
  private name = 'Order_Rejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('Nao posso aprovar o pedido rejeitado');
  }

  rejectPayment(): void {
    console.log('Nao posso recusar o pagamento pq o pedido ja esta recusado.');
  }

  waitPayment(): void {
    console.log(
      'Nao posso mover o pedido para pendente pq o pedido foi rejeitado.'
    );
  }

  shipOrder(): void {
    console.log('Nao posso despachar pedido recusado.');
  }
}
