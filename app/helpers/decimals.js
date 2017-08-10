import Ember from 'ember';

export default Ember.Helper.helper(function([number, decimals]) {
    var decimals = decimals || 0;
    return number.toFixed(decimals);
});
