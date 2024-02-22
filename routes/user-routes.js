const router = require('express').Router();
const userController = require('../controllers/user-controller.js');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = userController;

// routes for handling post put and delete
router.route('/')
  .get(getAllUsers) 
  .post(createUser); 

router.route('/:id')
  .get(getUserById) 
  .put(updateUser) 
  .delete(deleteUser);

module.exports = router;