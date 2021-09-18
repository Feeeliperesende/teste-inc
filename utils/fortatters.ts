/* import moment from 'moment'; */
/* import { format, getHours, getMinutes } from 'date-fns'; */
import Moment from "moment";


interface Date {
    day:number;
    mounth:number;
    year:number;
    value:number;
    num:number;
}


const formatters  = {
 
  volume: (value) => String(value).replace(/(\d+)(\d{3}$)/g, "$1.$2"),
  currency: (num, decimals = 2) => {
    return num
      ? `R$ ${parseFloat(String(num).replace(",", "."))
        .toFixed(decimals)
        .replace(".", ",")
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}`
      : "R$ 0,00";
  },
 
 
  increaseMonthDate:   (date, monthCounter) => {
    var formatedDate = date;

    formatedDate = Moment(date)
      .add(monthCounter, "month")
      .format("DD/MM/yyyy");

    return `${formatedDate}`;
  },
  formatDate: (date) => {
    const formatedDate = Moment(date)
      .tz("America/Sao_Paulo")
      .utc()
      .format("DD/MM/yyyy");

    return `${formatedDate}`;
  },
  formatCapitalize: (query) => {
    const newQuery = query[0].toUpperCase() + query.substring(1);
    return newQuery;
  },

  formatBRLtoEUA: (date) => {
    const [day, month, year] = date.split("/");
    return `${year}-${month}-${day}`;
  },
};

export default formatters;
