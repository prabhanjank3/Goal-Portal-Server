const convertQuerytoObject = query => {
  if ("closeDate" in query) {
    query = {
      ...query,
      closeDate: new Date(query.closeDate)
    };
  }
  if ("startDate" in query) {
    query = {
      ...query,
      startDate: new Date(query.startDate)
    };
  }
  if ("createdOn" in query) {
    query = {
      ...query,
      createdOn: new Date(query.createdOn)
    };
  }
  if ("state" in query) {
    query = {
      ...query,
      state: parseInt(query.state, 10)
    };
  }
  if ("Pts" in query) {
    query = {
      ...query,
      Pts: parseInt(query.Pts, 10)
    };
  }
  return query;
};
const getDateInStdFormate = date => {
  console.log(
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
};
module.exports.getDateInStdFormate = getDateInStdFormate;
module.exports.convertQuerytoObject = convertQuerytoObject;
