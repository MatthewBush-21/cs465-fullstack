const mongoose = require('mongoose');

const Trip = mongoose.model('trips'); 

const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({}).exec();
        console.log(trips);
        
        if (!trips || trips.length === 0) {
            return res
                .status(404)
                .json({ "message": "No trips found in the database" });
        } 
        
        return res
            .status(200)
            .json(trips);

    } catch (err) {
        return res
            .status(500)
            .json(err);
    }
};

const tripsFindByCode = async (req, res) => {
    try {
        const tripCode = req.params.tripCode;
        const trip = await Trip.findOne({ code: tripCode }).exec();

        if (!trip) {
            return res
                .status(404)
                .json({ message: "Trip not found" });
        }

        return res
            .status(200)
            .json(trip);
    } catch (err) {
        return res
            .status(500)
            .json(err);
    }
};

const tripsAddTrip = async (req, res) => {
    try {
        const newTrip = await Trip.create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });
        
        return res
            .status(201)
            .json(newTrip);
            
    } catch (err) {
        return res
            .status(400) 
            .json(err);
    }
};


const tripsUpdateTrip = async (req, res) => {
    
    
    try {
        const q = await Trip.findOneAndUpdate(
            { 'code': req.params.tripCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            },
            { new: true } 
        ).exec();
        
        if (!q) { 
            
            return res
                .status(404)
                .json({ message: "Trip not found for updating" });
        } else { 
            
            return res
                .status(200)
                .json(q);
        }
    } catch (err) {
        return res
            .status(400)
            .json(err);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};