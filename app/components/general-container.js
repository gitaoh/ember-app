import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class GeneralContainerComponent extends Component {
  @service('shopping-cart') cart;

  get shopped() {
    return this.cart.itemList.reduce((total, item) => {
      return (total += item.count);
    }, 0);
  }

  get hasShopped() {
    return this.shopped > 0;
  }
}
