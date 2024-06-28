// esta es unafuncion superior 
const catchAsync = (controller) => {
    return (req, res, nex) => {
        controller(req, res).catch((err) => nex(err));
    }
}

module.exports = {catchAsync}