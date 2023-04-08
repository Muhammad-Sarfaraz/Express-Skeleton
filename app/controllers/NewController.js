const controller = {};

controller.index = (req, res) => {
    res.render('index');
};

controller.show = (req, res) => {
    const {id} = req.params;
    res.render('index');
};


module.exports = controller;