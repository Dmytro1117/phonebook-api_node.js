const Contact = require("../models/Contact");

const calculateSubscription = async (userId) => {
  const count = await Contact.countDocuments({ owner: userId });

  if (count < 10) return "starter";
  if (count >= 10 && count <= 20) return "pro";
  return "business";
};

module.exports = calculateSubscription;
