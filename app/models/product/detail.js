import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  seals: DS.hasMany('product/details/seal'),
});
