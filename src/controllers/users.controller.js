let users = [
  { id: 1, name: "Yohan", poste: "Cornerback 🏈" },
  { id: 2, name: "Coach", poste: "Head Coach" }
];

const getAllUsers = (req, res) => {
  res.json(users);
};
const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }

  res.json(user);
};

const createUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    poste: req.body.poste
  };

  users.push(newUser);

  res.status(201).json({
    message: "Utilisateur créé 🚀",
    user: newUser
  });
};
const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const initialLength = users.length;

  users = users.filter(u => u.id !== userId);

  if (users.length === initialLength) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }

  res.json({ message: "Utilisateur supprimé 🗑️" });
};

module.exports = {
 getAllUsers,
  getUserById,
  createUser,
  deleteUser
};
