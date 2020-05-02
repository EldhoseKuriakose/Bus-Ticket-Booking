//importing required libraries
const Ticket = require('../../models/ticket');

//book ticket
module.exports.bookTicket = async function(req, res){
    try {
        const count = await Ticket.countDocuments();
        //if count less than 40 proceed
        if(count < 40){
            let tickets = await Ticket.create({
                id: count+1,
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                age: req.body.age,
                gender: req.body.gender
            });
            //save to database
            tickets.save();
            return res.status(200).json({
                id: tickets.id,
                name: tickets.name,
                email: tickets.email,
                phone: tickets.phone,
                age: tickets.age,
                gender: tickets.gender,
                message: "Ticket booked successfully"
            });
        }else{
            //if count not less than 40 seats are full
            return res.status(200).json({
                message: "Seats are full"
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}


//view status of ticket by id
module.exports.viewStatus = async function(req, res){
    try {
        let ticket = await (Ticket.findOne({id: req.params.id})).select("id isOpen");
        if(ticket){
            return res.status(200).json({
                id: ticket.id,
                isOpen: ticket.isOpen
            });
        }else{
            //ticket with given id is not found
            return res.status(404).json({
                message: "The ticket with given id is not found"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}


//view user details with given id
module.exports.viewDetails = async function(req, res){
    try {
        let ticket = await (Ticket.findOne({id: req.params.id})).select("id name email phone age gender");
        if(ticket){
            //returning user details
            return res.status(200).json({
                    id: ticket.id,
                    name: ticket.name,
                    email: ticket.email,
                    phone: ticket.phone,
                    age: ticket.age,
                    gender: ticket.gender
            });
        }else{
            //ticket with given id is not found
            return res.status(404).json({
                message: "The ticket with given id is not found"
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}


//view all open tickets
module.exports.viewOpen = async function(req, res){
    try {
        let ticket = await Ticket.find({isOpen: {$ne: false}});
        if(ticket.length < 1){
            return res.status(200).json({
                message: "No open tickets found"
            });
        }else{
            return res.status(200).json(ticket);
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

//view all closed tickets
module.exports.viewClose = async function(req, res){
    try {
        let ticket = await Ticket.find({isOpen: {$eq: false}}).sort("name");
        if(ticket.length < 1){
            return res.status(200).json({
                message: "No closed tickets found"
            });
        }else{
            return res.status(200).json(ticket);
        }
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

//update user details with given id
module.exports.update = async function(req, res){
    try {
        oldticket = await (Ticket.findOne({id: req.params.id}));
        if(!oldticket){
            return res.status(404).json({
                message: "The ticket with given id is not found"
            });
        }
        //updating user details
        ticket = await Ticket.findByIdAndUpdate(oldticket, {
            name: req.body.name != null ? req.body.name: oldticket.name,
            phone: req.body.phone != null ? req.body.phone: oldticket.phone,
            isOpen: false,
            email: req.body.email != null ? req.body.email: oldticket.email,
            age: req.body.age != null ? req.body.age: oldticket.age,
            gender: req.body.gender != null ? req.body.gender: oldticket.gender
        });
        return await res.status(200).json({
            id: ticket.id,
            name: req.body.name,
            phone: req.body.phone,
            isOpen: false,
            email: req.body.email,
            age: req.body.age,
            gender: req.body.gender
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

