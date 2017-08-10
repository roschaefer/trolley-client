import DS from 'ember-data';

export default DS.Model.extend({
  product: DS.belongsTo('product'),
  priority: DS.attr('string'),
  type: DS.attr('string'),
  filename: DS.attr('string'),
  headline: DS.attr('string'),
  text: DS.attr('string'),
});
