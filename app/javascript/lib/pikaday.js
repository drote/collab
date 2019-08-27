import Pikaday from 'pikaday';
import moment from 'moment';

export function initPikaday(field, container) {
  const pikaday = new Pikaday({
    field: field,
    bound: false,
    container: container,
    firstDay: 1,
    yearRange: 10,
    defaultDate: moment().add(1, 'day').toDate(),
    setDefaultDate: true,
    format: 'M/D/YYYY',
    i18n: {
      previousMonth : 'Prev',
      nextMonth     : 'Next',
      months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
      weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      weekdaysShort : ['Su','Mo','Tu','We','Th','Fr','Sa']
    },
    toString(date, format) {
      return moment(date);
    },
  })

  return pikaday;
}
