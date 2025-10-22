const Users = [];

function getUsers(_req, res) {
  res.json({
    message: "Fetching all Users",
    data: Users,
  });
}
function addUser(req, res) {
  const user = {
    id: Users.length + 1,
    name: req.body.name,
  };
  Users.push(user);
  res.json({
    message: "Adding a new User",
    data: user.name,
  });
}
function getUserById(req, res) {
  const userId = parseInt(req.params.id);
  const user = Users.find((u) => {
    return u.id === userId;
  });

  if (!user) return res.status(404).send("user not found");
  res.send(
    `Fetching User with ID: ${userId} \n here is the details ${user.name}`
  );
}

export default {
  getUserById,
  addUser,
  getUsers,
};
