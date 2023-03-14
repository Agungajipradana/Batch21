import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";

const router = Router();

router.get("/", indexCtrl.Job_hsCtrl.findAll);
router.get("/:id", indexCtrl.Job_hsCtrl.findOne);
router.post("/", indexCtrl.Job_hsCtrl.create);
router.put("/:id", indexCtrl.Job_hsCtrl.update);
router.delete("/:id", indexCtrl.Job_hsCtrl.deleted);

export default router;
