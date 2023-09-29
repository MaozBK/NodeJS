const usersWS = require("../DAL/usersWS");

const getAllUsers = async () => {
  let { data: users } = await usersWS.getAllUsers();

  // users = users.map((user) => {
  //     return {
  //         id: user.id,
  //         username: user.username,
  //         city: user.address.city,
  //     };
  // });

  return users;
};

module.exports = { getAllUsers };
