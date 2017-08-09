import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | details/product seals/seal', function() {
  setupComponentTest('details/product-seals/seal', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#details/product-seals/seal}}
    //     template content
    //   {{/details/product-seals/seal}}
    // `);

    this.render(hbs`{{details/product-seals/seal}}`);
    expect(this.$()).to.have.length(1);
  });
});
