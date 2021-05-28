const dateFormat = (date, format) => {
  const map = {
    dd: date.getDate(),
    mm: date.getMonth() + 1,
    yy: date.getFullYear(),
  };

  return format.replace(/dd|mm|yy|yyy/gi, (matched) => map[matched]);
};
module.exports=dateFormat