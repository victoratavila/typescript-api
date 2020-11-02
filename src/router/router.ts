import { Router } from 'express';;
const router = Router();
import UserController from '../Controller/UserController';

router.get('/user', UserController.index);
router.post('/create', UserController.create);

export default router;