import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addReport: function() {
      var newReport = this.store.createRecord('report', {
        date: this.get('date'),
        tests: this.get('tests'),
        passed: this.get('passed'),
        failed: this.get('failed'),
        details: this.get('details'),
      });
      console.log(this.get('date'));
      console.log(this.get('details'));
      newReport.save();
      this.transitionToRoute('reports');
    },
  },
});
