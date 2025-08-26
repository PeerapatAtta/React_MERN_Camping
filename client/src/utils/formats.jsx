import numeral from 'numeral';
import moment from 'moment/min/moment-with-locales';

export const formatNumber = (number) => {
  if (isNaN(number)) return "0";
  return numeral(number).format("0,0");
};

export const formatDate = (date) => {
  if (!date) return "";
  return moment(date).locale('th').format('d-MMM-yyy');
};