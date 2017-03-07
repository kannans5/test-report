import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteReport(report) {
      report.deleteRecord();
      report.save();
    },
  },
});
