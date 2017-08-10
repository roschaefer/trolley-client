import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  rfids: hasMany('product-rfid')
});
