import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();
const seller1 = new Seller();

seller1.addProduct({ id: '1', name: 'Camiseta', price: 50 });
seller1.addProduct({ id: '2', name: 'Calca', price: 180 });
seller1.addProduct({ id: '3', name: 'Sapato', price: 250 });

const seller2 = new Seller();
seller2.addProduct({ id: '4', name: 'Camiseta feminina', price: 30 });
seller2.addProduct({ id: '5', name: 'Calca feminina', price: 150 });
seller2.addProduct({ id: '6', name: 'Sapato feminino', price: 300 });

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();

buyer.buy('4');
buyer.buy('5');
