module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    const dateObj = new Date(date);
    
    //date obj is now real javascript date
   
    return `${dateObj.getMonth() + 1}/ ${dateObj.getDay()}/ ${dateObj.getFullYear() + 5}`;
  },
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY
};
