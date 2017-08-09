import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | shopping list/item', function() {
  setupComponentTest('shopping-list/item', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#shopping-list/item}}
    //     template content
    //   {{/shopping-list/item}}
    // `);

    this.render(hbs`{{shopping-list/item}}`);
    expect(this.$()).to.have.length(1);
  });
});
