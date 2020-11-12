// const sql = require("mssql");
// const config = {
//   user: "zee5cmsuser",
//   password: "#9691F87P306vo3aF0880rJsN",
//   server: "z5-prod.secondary.database.windows.ne",
//   databse: "z5-cms",
// };
// const connectDBMysql = async () => {
//   try {
//     // make sure that any items are correctly URL encoded in the connection string
//     const sqlcont = await sql.connect(config, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("connected mssql");
//       }
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };
//1.
const sql = require("mssql");
//2.
var config = {
  user: "zee5cmsuser",
  password: "#9691F87P306vo3aF0880rJsN",
  server: "z5-prod.secondary.database.windows.net",
  databse: "z5-cms",
  options: {
    trustedConnection: true,
  },
};

connectDBMysql = () => {
  sqlInstance.connect(config);
};

module.exports = connectDBMysql;
