function datesArray({ checkIn, checkOut }) {
  const data = [];

  let d = new Date(checkIn);
  const toDate = new Date(checkOut);

  for (d; d <= toDate; d.setDate(d.getDate() + 1)) {
    data.push(new Date(d));
  }

  return data
}

export { datesArray }
