import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addReport: function() {
      var newReport = this.store.createRecord('report', {
        date: this.get('dateValue'),
        tests: this.get('tests'),
        passed: this.get('passed'),
        failed: this.get('failed'),
        details: this.get('details'),
      });
      console.log(this.get('dateValue'));
      console.log(this.get('details'));
      console.log(newReport);
      newReport.save();
      this.transitionToRoute('reports');
    },
  },
});
