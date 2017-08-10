import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | shopping summary', function() {
  setupComponentTest('shopping-summary', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#shopping-summary}}
    //     template content
    //   {{/shopping-summary}}
    // `);
    this.set('activePriorities', []);
    this.render(hbs`{{shopping-summary activePriorities=activePriorities}}`);
    expect(this.$()).to.have.length(1);
  });
});
