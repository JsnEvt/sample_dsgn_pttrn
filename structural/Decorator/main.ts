import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);
const tShirtStampFrontAndBack = new ProductStampDecorator(tShirtWithStamp);
console.log(tShirt.getPrice(), tShirt.getName());
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName());
console.log(
  tShirtStampFrontAndBack.getPrice(),
  tShirtStampFrontAndBack.getName()
);

const customizeTshirt = new ProductCustomizationDecorator(tShirt);
console.log(customizeTshirt.getPrice(), customizeTshirt.getName());
