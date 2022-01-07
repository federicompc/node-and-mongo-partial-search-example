const Countries = require("./../models/dataModel");
const fs = require("fs");
// const countriesData = require("./../data/countries");
const textSearch = require("mongoose-partial-full-search");
const path = require("path");
const dir = path.resolve();

exports.uploadData = async (req, res, next) => {
  const file = JSON.parse(
    fs.readFileSync(`${dir}/data/countries.json`, "utf8")
  );

  await Countries.deleteMany({});
  const count = file.map(async (c) => {
    console.log("Adding", c);
    await Countries.create(c);
  });
  await Promise.all(count);

  res.status(200).json({
    message: "uploaded",
  });
};

exports.searchData = async (req, res, next) => {
  const search = await Countries.search(req.params.param, (e) => {
    console.log(e);
  });
  res.status(200).json(search);
};
