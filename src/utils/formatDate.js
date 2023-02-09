const formatDate = (d) => {
  const date = new Date(d);
  let day = `${date.getDate()}`;
  let month = `${date.getMonth() + 1}`;
  const year = date.getFullYear() < 1970 ? 1970 : date.getFullYear();
  if (day < 10) day = `0${day}`;
  if (month < 10) month = `0${month}`;
  console.log(day + " " + month + " " + year);
  return [day, month, year].join("/");
};

export default formatDate;
