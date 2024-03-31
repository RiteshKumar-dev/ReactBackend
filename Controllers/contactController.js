const Contact = require("../Models/contactModel");

const contactController = async (req, res) => {
  try {
    const { username, email, message } = req.body;

    // Validate input
    if (!username || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required fields" });
    }

    // Create new contact
    const newContact = await Contact.create({
      username,
      email,
      message
    });

    return res.status(201).json({ message: "Message sent successfully", data: newContact });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = contactController;
