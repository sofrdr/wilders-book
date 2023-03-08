module.exports = (req, res, next) => {
  try {
    const random = Math.random();
    if (random < 0.33) {
      throw new Error("Request limited");
    } else {
      next();
    }
  } catch (error) {
    if (error.message === "Request limited") {
      return res.status(418).send(req.ip);
    }
  }
};
