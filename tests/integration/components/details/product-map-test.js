import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | details/product map', function() {
  setupComponentTest('details/product-map', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#details/product-map}}
    //     template content
    //   {{/details/product-map}}
    // `);

    this.render(hbs`{{details/product-map}}`);
    expect(this.$()).to.have.length(1);
  });
});
