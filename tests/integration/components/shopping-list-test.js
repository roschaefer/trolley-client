import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | shopping list', function() {
  setupComponentTest('shopping-list', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#shopping-list}}
    //     template content
    //   {{/shopping-list}}
    // `);

    this.render(hbs`{{shopping-list}}`);
    expect(this.$()).to.have.length(1);
  });
});
