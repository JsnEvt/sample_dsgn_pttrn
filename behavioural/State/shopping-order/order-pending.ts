import { ShoppingOrderStateProtocol } from '../interface/shopping-order-state';
import { ShoppingOrder } from './shopping-order';
import { OrderApproved } from './order-appoved';
import { OrderRejected } from './order-rejected';

export class OrderPending implements ShoppingOrderStateProtocol {
  private name = 'Order_Pending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }

  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
  }

  waitPayment(): void {
    console.log('Nao posso enviar o pedido com o pagamento pendente.');
  }

  shipOrder(): void {
    console.log('Nao posso enviar pedido pendente');
  }
}
