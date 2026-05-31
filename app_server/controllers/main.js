const index = (req, res) => {
    res.render('index', { title: 'Travlr Getaways' });
};

const about = (req, res) => {
    res.render('about', { title: 'About Travlr' });
};

module.exports = {
    index,
    about
};
