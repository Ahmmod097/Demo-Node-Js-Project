const Goal = require('../model/goalModel');

const getGoalsResponse = async() => {
    const goals = await Goal.find();
    return goals;
};


const setGoalResponse = async(req) => {
    const goal = await Goal.create({
        text: req.text
    })
    return goal;
};

const updateGoalResponse = async(id, body) => {
    const goal = await Goal.findById(id);
    if (!goal) {
        res.status(400)
        t
        throw new Error('Goal not found')
      }
    const updatedGoal = await Goal.findByIdAndUpdate(id, body, {
        new: true,
      })
    
    return updatedGoal;
};

const deleteGoalResponse = async (id) => {
    const goal = await Goal.findById(id);
    if (!goal) {
        res.status(400)
        t
        throw new Error('Goal not found')
      }
    const deletedGoal = await goal.remove();
    
    return deletedGoal;
};

module.exports = {
    getGoalsResponse,
    setGoalResponse,
    updateGoalResponse,
    deleteGoalResponse
}