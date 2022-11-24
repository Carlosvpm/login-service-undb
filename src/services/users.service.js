import { checkUserQuery } from "../../database/queries.js";
export const checkUser = (res, user) => {
  checkUserQuery(user.username, (results) => {
    console.log(user.username, user.password);
    if (
      results[0].username == user.username &&
      results[0].password == user.password
    ) {
      return res.send({ authorization: true });
    }
  });
};
