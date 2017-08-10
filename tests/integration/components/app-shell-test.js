import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | app shell', function() {
  setupComponentTest('app-shell', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#app-shell}}
    //     template content
    //   {{/app-shell}}
    // `);

    this.render(hbs`{{app-shell}}`);
    expect(this.$()).to.have.length(1);
  });
});
