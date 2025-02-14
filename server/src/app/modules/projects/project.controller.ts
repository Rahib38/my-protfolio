import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { projectService } from './project.service';

const createProject = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await projectService.projectCreate(body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Project created successfully',
    data: result,
  });
});

const getProject = catchAsync(async (req, res) => {
  const queryData = req.query;
  const result = await projectService.getAllProject(queryData);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Project get successfully',
    data: result,
  });
});

const getSingleProject = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await projectService.singleProject(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Single Project get successfully',
    data: result,
  });
});

const updateProject = catchAsync(async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const result = await projectService.updateProject(id, body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: ' Project update successfully',
    data: result,
  });
});

const deleteProject=catchAsync(async(req,res)=>{
    const id=req.params.id
    const result= await projectService.deleteProject(id)
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: ' Project delete successfully',
        data: result,
      });
})


export const projectController = {
  createProject,
  getProject,
  getSingleProject,updateProject,
  deleteProject
};
