import { connection } from "./connection.db.js";

export const checkUserQuery = async (username, callback) => {
  await connection.query(
    `SELECT username, password FROM users usr WHERE usr.username = '${username}' `,
    (err, results, fields) => {
      if (err) throw err;
      callback(results);
    }
  );
};
