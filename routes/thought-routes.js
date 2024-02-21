const router = require('express').Router();
const { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, removeReaction } = require('../controllers/thought-controller');

// routes for handling thoughts, get post delete 
router.route('/')
  .get(getAllThoughts) 
  .post(createThought); 

router.route('/:id')
  .get(getThoughtById) 
  .put(updateThought) 
  .delete(deleteThought); 

// routing for reactins, post
router.route('/:thoughtId/reactions')
  .post(addReaction); 

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction); 

module.exports = router;