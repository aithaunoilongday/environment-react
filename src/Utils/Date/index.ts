import moment from 'moment';

export const ValidateFullDate = (time: Date) => {
  return moment(time).utcOffset('+09:00').format('MM/DD/YYYY, HH:mm:ss');
};
