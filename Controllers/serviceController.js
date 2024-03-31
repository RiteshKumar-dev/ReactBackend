const Service = require("../Models/serviceModel");

const services = async (req, res) => {
  try {
    const response = await Service.find();
    console.log(response);
    if (!response) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json(response);
  } catch (error) {
    console.log("Error from service controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = services;
