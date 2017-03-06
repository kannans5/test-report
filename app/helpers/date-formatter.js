import Ember from 'ember';
import * as moment from 'moment';

export default Ember.Helper.extend({
  compute(format, date){
    if (typeof(format) !== 'string') {
      format = 'LL';
    }
    if (date !== null) {
      date = Date.now();
    }
    console.log(date);
    console.log(format);
    return moment(date).format(format);
}
});
