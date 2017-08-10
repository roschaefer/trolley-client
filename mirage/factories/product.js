import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Product ${i}`;
  },
  id(i) {
    return i;
  },
  distance() {
    return 0;
  },
  sugar() {
    return 0;
  },
  price() {
    return 0;
  }
});
