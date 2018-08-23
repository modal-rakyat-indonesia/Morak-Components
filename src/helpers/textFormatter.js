import moment from 'moment';
import 'moment/locale/id';

/* ----------- example format date: 19 Januari 2008 ----------- */
export const standardDate = date => moment(date).format('D MMMM YYYY');

/* ----------- example format date: Januari 19, 2008 ----------- */
export const fullMonthName = date => moment(date).format('MMMM D, YYYY');

/* ----------- example format date: Jan 19, 2008 ----------- */
export const initialMonthName = date => moment(date).format('MMM D, YYYY');

/* ----------- example format date: 19 Jan, 3.20 PM ----------- */
export const dateInWordsWithTime = date => moment(date).format('D MMM, H:mm');

/* ----------- example format time: 10 menit yang lalu ----------- */
export const distanceInWordsToNow = date => moment(date).startOf('hour').fromNow();

/* ----------- example format time: Mar 20 ----------- */
export const dateMonthOnly = date => moment(date).format('MMM DD');

/* -- Indonesian Rupiah Style -- */
export const IDRFormatter = number =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })
    .format(number)
    .replace(/^(\D+)/, '$1 ');

/* -- US Dollar Style -- */
export const USDFormatter = number =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })
    .format(number)
    .replace(/^(\D+)/, '$1 ');

