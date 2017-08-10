import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  sugar: DS.attr('number'),
  distance: DS.attr('number'),
  price: DS.attr('number'),
  details: DS.hasMany('product-detail'),
  rfids: DS.hasMany('product-rfid'),
});
