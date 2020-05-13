module.exports = (app) => {
  const users = require('../controllers/user.controller');

  // Create a new User
  app.post('/api/users', users.create);

  // Retrieve all Users
  app.get('/api/users', users.findAll);

  // Retrieve a single User by Id
  app.get('/api/user/:id', users.findById);

  //app.post('/api/user', users.findOne);  

  // Update a User with Id
  app.put('/api/users/:userId', users.update);

  // Delete a User with Id
  app.delete('/api/users/:userId', users.delete);
};
