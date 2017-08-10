export default Ember.Helper.helper(function([haystack, needle]) {
    return haystack.includes(needle);
});