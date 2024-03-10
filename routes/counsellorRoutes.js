import { Router } from 'express';
const router = Router();
import counsellorController from '../controllers/counsellorController';

router.post('/',counsellorController.createCouncellor);
router.post('/',counsellorController.getcounsellor);
router.post('/:id',counsellorController.getcouncellorById);
router.post('/:id',counsellorController.updatecouncellor);
router.post('/:id',counsellorController.deletecouncellor);
export default router;