const captainModel = require("../models/captain.model");
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Enter a valid email "),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be atleast 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be atleast 3 characters long."),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate no must be atleast 3 characters long."),
    body("vehicle.capacity")
      .isLength({ min: 1 })
      .withMessage("Capacity must be atleast 1."),
  ],
  captainController.registerCaptain
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Enter a valid email "),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters long"),
  ],
  captainController.loginCaptain
);

module.exports = router;
