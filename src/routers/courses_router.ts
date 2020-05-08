import express from 'express';

import * as courses from '../services/course_service';
import { Course} from '../models/course';

export const coursesRouter = express.Router();