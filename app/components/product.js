import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductComponent extends Component {
  @tracked number = 0;
  productImage = this.args.product.colors[0].image;
  @action
  addNumber() {
    this.number = this.number++;
  }
}
