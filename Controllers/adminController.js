const User = require("../Models/userModel")
const Contact = require("../Models/contactModel")
const Service = require("../Models/serviceModel")


const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select({ password: 0 })
    if (!users || users.length === 0) {
      res.status(404).json({ message: "NO users in database..." })
    }
    res.status(200).json(users)
  } catch (error) {
    next(error)
  }
}
const getUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const data = await User.findOne({ _id: userId }, { password: 0 })
    return res.status(200).json(data)
  } catch (error) {
    next(error)
  }
};
const updateUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const userData = req.body; // Use req.body to access the request body
    const updateUser = await User.updateOne({ _id: userId }, { $set: userData });
    return res.status(200).json(updateUser);
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.deleteOne({ _id: userId });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};





const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find()
    if (!contacts || contacts.length === 0) {
      res.status(404).json({ message: "NO contacts in database..." })
    }
    res.status(200).json(contacts)
  } catch (error) {
    next(error)
  }
}

const deleteContactsById = async (req, res) => {
  const userId = req.params.id;

  try {
    const contact = await Contact.findById(userId);
    if (!contact) {
      return res.status(404).json({ message: "contact not found" });
    }

    await Contact.deleteOne({ _id: userId });

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.log("Error deleting Contact:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


const getAllServices = async (req, res, next) => {
  try {
    const services = await Service.find()
    if (!services || services.length === 0) {
      res.status(404).json({ message: "NO services in database..." })
    }
    res.status(200).json(services)
  } catch (error) {
    next(error)
  }
}
const deleteServicesById = async (req, res) => {
  const userId = req.params.id;

  try {
    const service = await Service.findById(userId);
    if (!service) {
      return res.status(404).json({ message: "service not found" });
    }

    await Service.deleteOne({ _id: userId });

    res.status(200).json({ message: "service deleted successfully" });
  } catch (error) {
    console.log("Error deleting service:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllUsers, getAllContacts, getAllServices, deleteUserById, getUserById, updateUserById, deleteContactsById, deleteServicesById }