import Ember from 'ember';
import data from './products/data';
import _ from 'lodash';

export default Ember.Service.extend({
    all() {
        return data.data;
    },

    find(id) {
        return _(data.data).find(function(product) {
            return product.id === parseInt(id);
        });
    },

    findByRfid(rfid) {
        return _(data.data).find(function(product) {
            return product.rfids.includes(rfid);
        });
    }
});
