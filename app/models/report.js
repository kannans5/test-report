import Model from 'ember-data/model';

export default Model.extend({
  date: DS.attr('string'),
  tests: DS.attr('number'),
  passed: DS.attr('number'),
  failed: DS.attr('number'),
  details: DS.attr('string')
});
