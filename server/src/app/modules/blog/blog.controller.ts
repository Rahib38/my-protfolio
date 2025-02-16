import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogService } from './blog.service';
// import { JwtPayload } from "jsonwebtoken";

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;

  const result = await BlogService.createBlog(data);

  sendResponse(res, {
    success: true,
    message: 'Blog create successfully',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const blogId = req.params.id;
  const payload = req.body;
  const result = await BlogService.updateBlog(blogId, payload);
  sendResponse(res, {
    success: true,
    message: 'Blog update successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const blogId = req.params.id;
  const result = await BlogService.deleteBlog(blogId);
  // const { _id, title, content, author }=result
  sendResponse(res, {
    success: true,
    message: 'Blog delete successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const blogId = req?.params?.blogId;
  const result = await BlogService.getSingleBlogs(blogId);
  sendResponse(res, {
    success: true,
    message: 'Single Blog fetched successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});
const getBlog = catchAsync(async (req: Request, res: Response) => {
  const queryData = req?.query;
  const result = await BlogService.getBlogs(queryData);
  sendResponse(res, {
    success: true,
    message: 'Blog fetched successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

export const BlogController = {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlog,
  getSingleBlog,
};
