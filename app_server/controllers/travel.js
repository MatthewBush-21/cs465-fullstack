// Updated JSON array matching your actual web template layout
const trips = [
    {
        "code": "TR2601",
        "name": "Gale Reef",
        "image": "reef1.jpg", 
        "resort": "Coral Paradise Resort",
        "perPerson": "299.00",
        "description": "Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio. Nulla facilisi."
    },
    {
        "code": "TR2602",
        "name": "Dawson’s Reef",
        "image": "reef2.jpg", 
        "resort": "Oceanic Blue Lodge",
        "perPerson": "459.00",
        "description": "Integer magna leo, posuere et dignissim vitae, porttitor at odio. Pellentesque a metus nec magna placerat volutpat. Nunc nisi mi, elementum sit amet aliquet quis."
    },
    {
        "code": "TR2603",
        "name": "Claire’s Reef",
        "image": "reef3.jpg", 
        "resort": "The Vineyard Inn & Spa",
        "perPerson": "699.00",
        "description": "Donec sed felis risus. Nulla facilisi. Donec a orci tellus, et auctor odio. Fusce ac orci nibh, quis semper arcu. Cras orci neque, euismod et accumsan ac."
    }
];


const travelList = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways - Travel', trips: trips });
};

module.exports = {
    travelList
};