const db = require('../config/db.config');
const User = db.users;

// Post a User
exports.create = (req, res) => {
  // Save to MySQL database
  User.create({
    userId: req.body.userId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber
  }).then((user) => {
    // Send created user to client
    res.send(user);
  });
};

// FETCH all users
exports.findAll = (req, res) => {
  User.findAll().then((users) => {
    // Send all users to Client
    res.send(users);
  });
};

//Find a User by Id
exports.findById = (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.send(user);
  });
};

// Update a User
exports.update = (req, res) => {
  const id = req.params.userId;
  User.update(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber
    },

    { where: { id: req.params.userId } }
  ).then(() => {
    res.status(200).send('updated successfully a user with id = ' + id);
  });
};

// Delete a User by Id
exports.delete = (req, res) => {
  const id = req.params.userId;
  User.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a user with id = ' + id);
  });
};
