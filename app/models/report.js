import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  date: attr('date'),
  tests: attr('number'),
  passed: attr('number'),
  failed: attr('number'),
  image: attr('string'),
  details: attr('string')
});
