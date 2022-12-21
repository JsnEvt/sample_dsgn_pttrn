import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mdb = new MainDishBuilder();
mdb.makeMeal();
console.log(mdb.getMeal());
console.log(mdb.getPrice());

const vdb = new VeganDishBuilder();
const vegan = vdb.makeMeal();
console.log(vegan.getMeal());
console.log(vegan.getPrice());
