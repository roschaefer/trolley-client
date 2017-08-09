import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | details/product graphic', function() {
  setupComponentTest('details/product-graphic', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#details/product-graphic}}
    //     template content
    //   {{/details/product-graphic}}
    // `);

    this.render(hbs`{{details/product-graphic}}`);
    expect(this.$()).to.have.length(1);
  });
});
