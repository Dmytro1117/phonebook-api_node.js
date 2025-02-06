const phoneRegexp = /^\d{3}-\d{2}-\d{2}$/;
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const typeSubscription = ["starter", "pro", "business"];

module.exports = { phoneRegexp, emailRegexp, typeSubscription };
