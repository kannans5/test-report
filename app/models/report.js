import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  date: attr('string'),
  tests: attr('number'),
  passed: attr('number'),
  failed: attr('number'),
  details: attr('string')
});
