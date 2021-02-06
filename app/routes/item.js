import Route from '@ember/routing/route';
import { products } from '../data/products';

export default class ItemRoute extends Route {
  model(params) {
    const { item_id } = params;
    return products.find(({ id }) => id === item_id);
  }

  setUpController(controller, model) {
    super.setUpController(controller, model);
    controller.color = model.colors[0].color;
  }
}
