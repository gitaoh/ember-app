import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    return [{ price: 30 }, { price: 15 }];
  }
}
