import mongoose from "mongoose";

// Define the user schema
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Export the user model
// Use module.exports for CommonJS
export default mongoose.model("Contact", contactSchema);
