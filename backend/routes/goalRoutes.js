const express = require('express');
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controller/goalController')

router.route('/').post(setGoal).get(getGoals);
router.route('/:id').put(updateGoal).delete(deleteGoal);

module.exports = router;