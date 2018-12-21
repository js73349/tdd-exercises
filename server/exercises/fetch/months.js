export const months = {
  prior: (date = new Date()) => {
    return {
      month: date.getMonth(), year: date.getFullYear()
    };
  },
  current: (date = new Date()) => {
     return {month: date.getMonth() + 1, year: date.getFullYear()};
  }
};