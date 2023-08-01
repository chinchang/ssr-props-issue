const url = require("url");

export default async (req, res) => {
  var queryData = url.parse(req.url, true).query;
  let levelId = queryData.id;

  res.statusCode = 200;

  res.end(`hello ${levelId}`);
};
