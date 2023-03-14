import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";

const router = Router();

router.get("/", indexCtrl.RegCtrl.findAll);
router.get("/:id", indexCtrl.RegCtrl.findOne);
router.post("/", indexCtrl.RegCtrl.create);
router.put("/:id", indexCtrl.RegCtrl.update);
router.delete("/:id", indexCtrl.RegCtrl.deleted);

export default router;
