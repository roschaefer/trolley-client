import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | details/product video', function() {
  setupComponentTest('details/product-video', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#details/product-video}}
    //     template content
    //   {{/details/product-video}}
    // `);

    this.render(hbs`{{details/product-video}}`);
    expect(this.$()).to.have.length(1);
  });
});
