import { Router } from 'express';
import ticketController from '../controllers/ticketController.js';

const router= Router()

// Add Ticket route
router.post('/add', ticketController.addTicket);

// Get all tickets for a user
router.get('/user/:id', ticketController.getUserTickets);

//Update all tickets for a user
router.put('/user/:_id',ticketController.updateUserTicket);

//delete tickets
router.delete('/user/:_id', ticketController.deleteUserTicket);

export default router;