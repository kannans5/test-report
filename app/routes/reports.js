import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      var reportz = this.store.findAll('report', { reload: true }).
        then(reports => reports.sortBy('date'));
      console.log(reportz);
      return reportz;
    }
});
