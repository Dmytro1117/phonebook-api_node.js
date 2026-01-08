const Contact = require("../models/Contact");

const calculateSubscription = async (userId) => {
  const count = await Contact.countDocuments({ owner: userId });

  if (count < 5) return "starter";
  if (count >= 5 && count <= 10) return "pro";
  return "business";
};

module.exports = calculateSubscription;
