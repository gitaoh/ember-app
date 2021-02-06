import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductDetailsComponent extends Component {
  @service('shopping-cart') cart;

  @action
  addToCart() {
    const { name, color, colors, price } = this.args;

    this.cart.addItem({
      name,
      color,
      price: price.current,
      image: colors.find((col) => col.color === color).image,
    });
  }
}
