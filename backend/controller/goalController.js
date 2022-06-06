const asyncHandler = require('express-async-handler');

const { getGoalsResponse, setGoalResponse, updateGoalResponse, deleteGoalResponse } = require("../services/goalServices")

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json(
        { 
            message: "OK",
            "result": await getGoalsResponse()
        }
    );
});

const setGoal = asyncHandler(async (req, res) => {
    res.status(201).json(
        { 
            message: "OK",
            "result": await setGoalResponse(req, res)
        }
    );
});

const updateGoal = asyncHandler(async  (req, res) => {
    res.status(200).json(
        { 
            message: `Update Goal ${req.params.id}`,
            "result": await updateGoalResponse(req.params.id, req.body)
        }
    );
});

const deleteGoal = asyncHandler(async  (req, res) => {
    res.status(200).json(
        { 
            message: `Delete Goal ${req.params.id}`,
            "result": await deleteGoalResponse(req.params.id)
        }
    );
});

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}