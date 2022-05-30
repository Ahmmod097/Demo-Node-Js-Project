const asyncHandler = require('express-async-handler');

const { getGoalsResponse, setGoalResponse, updateGoalResponse, deleteGoalResponse } = require("../services/goalServices")

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json(
        { 
            message: "OK",
            "result": getGoalsResponse()
        }
    );
});

const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error("Please add a text field")
    }
    res.status(201).json(
        { 
            message: "OK",
            "result": setGoalResponse(req.body.text)
        }
    );
});

const updateGoal = asyncHandler(async  (req, res) => {
    res.status(200).json(
        { 
            message: `Update Goal ${req.params.id}`,
            "result": updateGoalResponse()
        }
    );
});

const deleteGoal = asyncHandler(async  (req, res) => {
    res.status(200).json(
        { 
            message: `Delete Goal ${req.params.id}`,
            "result": deleteGoalResponse()
        }
    );
});

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}