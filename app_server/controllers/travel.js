const axios = require('axios');


const apiOptions = {
    server: 'http://localhost:3000'
};


const travelList = async (req, res) => {
    const path = '/api/trips';
    
    try {
      
        const response = await axios.get(`${apiOptions.server}${path}`);
        
        res.render('travel', { 
            title: 'Travlr Vacations', 
            trips: response.data 
        });
    } catch (err) {
        console.error(err);
        res.render('error', { 
            message: 'An error occurred while retrieving travel data from the API.' 
        });
    }
};

module.exports = {
    travelList
};