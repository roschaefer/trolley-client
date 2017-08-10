import { expect } from 'chai';
import { describe, it, context } from 'mocha';
import { setupTest } from 'ember-mocha';

let service = null;
describe('Unit | Service | session state', function() {

  setupTest('service:session-state', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  it('exists', function() {
    service = this.subject();
    expect(service).to.be.ok;
  });

  describe('priorities', function() {
    it('returns null by default', function() {
      service = this.subject();
      service.set('priorities', []);
      expect(service.nextPriority('organic')).to.be.null;
    });

    context('when current priority is null', function() {
      it('returns first priority', function() {
        service = this.subject();
        service.set('priorities', ['organic', 'regional']);
        expect(service.nextPriority(null)).to.eq('organic');
      });
    });

    context('when current priority is first priority', function() {
      it('returns next priority', function() {
        service = this.subject();
        service.set('priorities', ['organic', 'regional']);
        expect(service.nextPriority('organic')).to.eq('regional');
      });
    });

    context('when current priority is last priority', function() {
      it('returns next null again', function() {
        service = this.subject();
        service.set('priorities', ['organic', 'regional']);
        expect(service.nextPriority('regional')).to.eq(null);
      });
    });
  });

  describe('priorities', function() {
    it('empty by default', function() {
      service = this.subject();
      expect(service.get('priorities')).to.be.empty;
    });

    context('priority activated', function() {
      it('not empty', function() {
        service = this.subject();
        service.set('priorities', []);
        service.updatePriority('regional', true);
        expect(service.get('priorities.length')).to.eq(1);
      });

      it('includes activated priority', function() {
        service = this.subject();
        service.set('priorities', []);
        service.updatePriority('regional', true);
        expect(service.get('priorities.firstObject')).to.eq('regional');
      });

      context('some priorities already active', function() {
        it('appends to the end', function() {
          service = this.subject();
          service.set('priorities', ['organic']);
          service.updatePriority('regional', true);
          expect(service.get('priorities.0')).to.eq('organic');
          expect(service.get('priorities.1')).to.eq('regional');
        });
      });

      context('unknown priority', function() {
        it('appends nothing', function() {
          service = this.subject();
          service.set('priorities', []);
          expect(service.get('priorities')).to.be.empty
          service.updatePriority('I am not a priority', true);
          expect(service.get('priorities')).to.be.empty
        });
      });

      context('same priority again', function() {
        it('appends nothing', function() {
          service = this.subject();
          service.set('priorities', ['regional']);
          expect(service.get('priorities.length')).to.eq(1);
          service.updatePriority('regional', true);
          expect(service.get('priorities.length')).to.eq(1);
        });
      });
    });

    context('priority deactivated', function() {
      it('removes priority', function() {
        service = this.subject();
        service.set('priorities', ['regional']);
        service.updatePriority('regional', false);
        expect(service.get('priorities.length')).to.eq(0);
      });

      it('removes only active priorities', function() {
        service = this.subject();
        service.set('priorities', ['organic']);
        service.updatePriority('regional', false);
        expect(service.get('priorities.0')).to.eq('organic');
        expect(service.get('priorities.length')).to.eq(1);
      });
    });
  });
});
