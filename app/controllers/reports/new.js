import Ember from 'ember';

export default Ember.Controller.extend({
  select_box_value: 'Y',
  actions: {
    updateValue: function(value) {
      console.log(value);
      this.set('select_box_value', value);
      console.log(this.get('select_box_value'));
    },

    addReport: function() {
      var newReport = this.store.createRecord('report', {
        date: this.get('dateValue'),
        tests: this.get('tests'),
        passed: this.get('passed'),
        failed: this.get('failed'),
        intermittent: this.get('select_box_value'),
        details: this.get('details'),
      });
      console.log(this.get('dateValue'));
      console.log(this.get('intermittent'));
      console.log(newReport);
      newReport.save();
      this.transitionToRoute('reports');
      this.refresh();
    },
  },
});
