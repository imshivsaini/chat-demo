const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function getAllUsers(_req, res) {
  res.json({
    message: "Fetching all users",
    data: users,
  });
}

function addUser(req, res) {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);
  res.json({
    message: "Adding a new user",
    data: newUser.name,
  });
}

function getUserById(req, res) {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => {
    return u.id === userId;
  });

  if (!user) return res.status(404).send("user not found");
  res.send(
    `Fetching user with ID: ${userId} \n here is the details ${user.name}`
  );
}

export default { getAllUsers, getUserById, addUser };
