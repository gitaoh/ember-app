import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service('shopping-cart') cart;

  get subtotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }

  @action
  updateItemCount(item, event) {
    const count = Number(event.target.value);
    if (count >= 0) item.count = count;
    else item.count = 0;
  }

  get items() {
    return this.cart.itemList;
  }

  get tax() {
    return 0.1 * this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  }
}
