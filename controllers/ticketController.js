// import TicketModel from "../models/ticketModel.js";

// // Add a new ticket
// const addTicket = async (req, res) => {
//   const {
//     issueTitle,
//     description,
//     priority,
//     category,
//     location,
//     imageURL,
//     raisedBy,
//     userId,
//     fcmToken,
//     customCategory,
//   } = req.body;

//   try {
//     const newTicket = new TicketModel({
//       issueTitle,
//       description,
//       priority,
//       category,
//       location,
//       imageURL,
//       raisedBy,
//       userId,
//       fcmToken,
//       customCategory,
//     });

//     await newTicket.save();
//     res.status(201).json({ message: "Ticket created successfully", ticket: newTicket });
//   } catch (error) {
//     console.error("Error adding ticket:", error);
//     res.status(500).json({ message: "Error adding ticket", error });
//   }
// };

// // Get all tickets for a user
// const getUserTickets = async (req, res) => {
//   const userId = req.params.id;

//   try {
//     const tickets = await TicketModel.find({ userId });
//     res.status(200).json({ tickets });
//   } catch (error) {
//     console.error("Error fetching tickets:", error);
//     res.status(500).json({ message: "Error fetching tickets", error });
//   }
// };

// // Update a ticket for a user
// const updateUserTicket = async (req, res) => {
//   const ticketId = req.params._id;
//   const updates = req.body;

//   try {
//     const updatedTicket = await TicketModel.findByIdAndUpdate(ticketId, updates, {
//       new: true,
//       runValidators: true,
//     });

//     if (!updatedTicket) {
//       return res.status(404).json({ message: "Ticket not found" });
//     }

//     res.status(200).json({ message: "Ticket updated successfully", updatedTicket });
//   } catch (error) {
//     console.error("Error updating ticket:", error);
//     res.status(500).json({ message: "Error updating ticket", error });
//   }
// };

// // Delete a ticket
// const deleteUserTicket = async (req, res) => {
//   const ticketId = req.params._id;

//   try {
//     const deletedTicket = await TicketModel.findByIdAndDelete(ticketId);

//     if (!deletedTicket) {
//       return res.status(404).json({ message: "Ticket not found" });
//     }

//     res.status(200).json({ message: "Ticket deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting ticket:", error);
//     res.status(500).json({ message: "Error deleting ticket", error });
//   }
// };

// export default { addTicket, getUserTickets, updateUserTicket, deleteUserTicket };


import TicketModel from "../models/ticket.js";
import asyncHandler from "../middleware/asyncHandler.js";

// Add a new ticket
const addTicket = asyncHandler(async (req, res) => {
  const {
    issueTitle,
    description,
    priority,
    category,
    location,
    imageURL,
    id,
    userId,
    fcmToken,
    customCategory,
  } = req.body;

  const newTicket = new TicketModel({
    issueTitle,
    description,
    priority,
    category,
    location,
    imageURL,
    id,
    userId,
    fcmToken,
    customCategory,
  });

  await newTicket.save();
  res.status(201).json({ message: "Ticket created successfully", ticket: newTicket });
});

// Get all tickets for a user
const getUserTickets = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const tickets = await TicketModel.find({ id });

  res.status(200).json({ tickets });
});

// Update a ticket for a user
const updateUserTicket = asyncHandler(async (req, res) => {
  const ticketId = req.params._id;
  const updates = req.body;

  const updatedTicket = await TicketModel.findByIdAndUpdate(ticketId, updates, {
    new: true,
    runValidators: true,
  });

  if (!updatedTicket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  res.status(200).json({ message: "Ticket updated successfully", updatedTicket });
});

// Delete a ticket
const deleteUserTicket = asyncHandler(async (req, res) => {
  const ticketId = req.params._id;

  const deletedTicket = await TicketModel.findByIdAndDelete(ticketId);

  if (!deletedTicket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  res.status(200).json({ message: "Ticket deleted successfully" });
});


export default { addTicket, getUserTickets, updateUserTicket, deleteUserTicket };
