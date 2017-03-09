import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  date: DS.attr('string'),
  tests: DS.attr('number'),
  passed: DS.attr('number'),
  failed: DS.attr('number'),
  details: DS.attr('string')
});
