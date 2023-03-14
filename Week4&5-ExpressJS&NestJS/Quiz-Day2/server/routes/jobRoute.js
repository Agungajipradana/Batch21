import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";

const router = Router();

router.get("/", indexCtrl.JobsCtrl.findAll);
router.get("/:id", indexCtrl.JobsCtrl.findOne);
router.post("/", indexCtrl.JobsCtrl.create);
router.put("/:id", indexCtrl.JobsCtrl.update);
router.delete("/:id", indexCtrl.JobsCtrl.deleted);

export default router;
