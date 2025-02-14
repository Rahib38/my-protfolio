import { Router } from "express";
import { projectController } from "./project.controller";


const projectsRouter = Router()

projectsRouter.post('/', projectController.createProject)
projectsRouter.get('/',  projectController.getProject)
projectsRouter.get('/:id',  projectController.getSingleProject)
projectsRouter.patch('/:id',  projectController.updateProject)
projectsRouter.delete('/:id',   projectController.deleteProject)

export default projectsRouter