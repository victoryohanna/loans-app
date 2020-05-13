module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    userId: {
      type: Sequelize.STRING
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phoneNumber: {
      type: Sequelize.STRING
    }
  });

  return User;
};
