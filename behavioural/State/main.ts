import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder();

order.approvePayment();
console.log(order.getStateName());
order.rejectPayment();
order.approvePayment();
order.getState();
order.waitPayment();
