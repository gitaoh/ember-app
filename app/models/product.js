import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr name;
  @attr description;
  @attr prices;
  @attr features;
  @attr colors;
}
