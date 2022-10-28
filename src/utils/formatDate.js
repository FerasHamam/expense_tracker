const formatDate = (d) => {
  const date = new Date(d);
  let day = `${date.getDay()}`;
  let month = `${date.getMonth() + 1}`;
  const year = date.getFullYear();
  if (day.length < 2) day = `0${day}`;
  if (month.length < 2) month = `0${month}`;
  return [year, month, day].join("-");
};

export default formatDate;
