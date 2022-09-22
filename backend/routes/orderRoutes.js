const express = require("express");
const router = express.Router();
const {
  getOrders,
  setOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

router.route("/").get(getOrders);
router.route("/").post(setOrder);
router.route("/:id").delete(deleteOrder);
router.route("/:id").put(updateOrder);
module.exports = router;
