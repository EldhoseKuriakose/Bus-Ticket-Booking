//importing required libraries
const Ticket = require('../../models/ticket');

//admin resetall
module.exports.resetall = async function(req, res){
    try {
        const ticket = await Ticket.updateMany({},
            {
                //opens up all tickets
                $set: {isOpen: true}
            });
            const {nModified} = ticket;
            return res.status(200).json({
                message: "All tickets are now open"
            });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}