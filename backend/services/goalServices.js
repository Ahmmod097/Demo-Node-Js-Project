const getGoalsResponse = () => {
    return ["A", "B", "C", "D"];
};


const setGoalResponse = (text) => {
    return text;
};

const updateGoalResponse = () => {
    return "X";
};

const deleteGoalResponse = (req, res) => {
    return ["A", "B", "C"];
};

module.exports = {
    getGoalsResponse,
    setGoalResponse,
    updateGoalResponse,
    deleteGoalResponse
}