import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | facts item', function() {
  setupComponentTest('facts-item', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#facts-item}}
    //     template content
    //   {{/facts-item}}
    // `);

    this.render(hbs`{{facts-item}}`);
    expect(this.$()).to.have.length(1);
  });
});
