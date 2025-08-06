import mongoose from "mongoose";

const { Schema } = mongoose;

const ticketSchema = new Schema(
  {
    issueTitle: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    priority: {
      type: String,
      required: true,
      enum: ["Low", "Medium", "High", "Critical"],
      default: "Low",
    },
    category: {
      type: String,
      required: true,
      enum: ["Plumbing", "Electrical", "IT", "Other", "Furniture", "HVAC", "Cleaning", "Security"],
    },
    customCategory: {
        type: String,
        required: function () {
            return this.category === 'Other';
        },
    },
    location: { type: String, required: true },
    imageURL: { type: String }, // Not required: optional image
    //raisedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    id: { type: String, ref: "User", required: true },
    fcmToken: { type: String },
    status: {
      type: String,
      enum: ["Raised", "In Progress", "Resolved", "Closed"],
      default: "Raised",     
    },
    //assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    assignedTo: { type: String, ref: "User" },

  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

const TicketModel = mongoose.model("Ticket", ticketSchema);
export default TicketModel;
