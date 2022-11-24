import { Router } from 'express';
import { getProjects,postProject,putProject,deleteProject, getProjectsid } from '../Controllers/projects.controller.js';

const router = Router();

router.get('/projects', getProjects)

router.get('/projects/:id', getProjectsid)

router.post('/projects',postProject)

router.delete('/projects/:id',deleteProject)

router.put('/projects',putProject)

export default router