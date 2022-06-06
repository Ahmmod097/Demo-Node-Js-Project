const goalValidator = (req, res) => {
    const {text} = req.body;
    if(!text || text.length<2 || text.length>10){
        res.status(400);
        throw new Error("There is an error in your form submission")
    }
}

module.exports = {
    goalValidator
}