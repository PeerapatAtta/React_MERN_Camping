import numeral from 'numeral';

export const formatNumber = (number) => {
  if (isNaN(number)) return "0";
  return numeral(number).format("0,0");
};