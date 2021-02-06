import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Item {
  @tracked count;
  name;
  color;
  image;
  price;

  constructor(item) {
    this.color = item.color;
    this.count = item.count;
    this.image = item.image;
    this.price = item.price;
    this.name = item.name;
  }
}

export default class ShoppingCartService extends Service {
  @tracked itemList = [];

  addItem(item) {
    const exist = this.exist(item);
    if (exist) {
      exist.count++;
    } else {
      this.itemList = [...this.itemList, new Item({ ...item, count: 1 })];
    }
  }

  exist(item) {
    return this.itemList.find(({ name, color }) => {
      return name === item.name && color === item.color;
    });
  }
}
