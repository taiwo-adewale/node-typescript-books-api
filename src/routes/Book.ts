import express from "express";
import controller from "../controllers/Book";
import { ValidateSchema, Schemas } from "../middleware/ValidateSchema";

const router = express.Router();

router.post(
  "/create",
  ValidateSchema(Schemas.book.create),
  controller.createBook
);
router.get("/get/:bookId", controller.readBook);
router.get("/get", controller.readAllBook);
router.patch(
  "/update/:bookId",
  ValidateSchema(Schemas.book.update),
  controller.updateBook
);
router.delete("/delete/:bookId", controller.deleteBook);

export = router;
