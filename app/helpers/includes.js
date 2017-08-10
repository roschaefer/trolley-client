import Ember from 'ember';

export default Ember.Helper.helper(function([haystack, needle]) {
    if(haystack instanceof Array) {
        return haystack.includes(needle);
    } else {
        return false;
    }
});
