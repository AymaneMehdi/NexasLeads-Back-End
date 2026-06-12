const express = require("express");
const router = express.Router();
const controller = require("../controllers/blogController");
const auth = require("../middlewares/auth");

router.get("/", controller.getAllBlogs);
router.get("/:id", controller.getOneBlog);
router.post("/", auth, controller.createBlog);
router.put("/:id", auth, controller.updateBlog);
router.delete("/:id", auth, controller.deleteBlog);

module.exports = router;
