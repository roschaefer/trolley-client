import Ember from 'ember';

export default Ember.Helper.helper(function([number, decimals]) {
    if(typeof decimals === 'undefined') decimals = 0;
    return number.toFixed(decimals || 0);
});
