import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogController } from './blog.controller';
import { BlogValidation } from './blog.validation';

const blogRouter = Router();
blogRouter.get('/', BlogController.getBlog);
blogRouter.get('/:blogId', BlogController.getSingleBlog);
blogRouter.post(
  '/',
  validateRequest(BlogValidation.createBlogValidation),
  BlogController.createBlog,
);
blogRouter.patch(
  '/:id',
  validateRequest(BlogValidation.updateBlogValidation),
  BlogController.updateBlog,
);
blogRouter.delete('/:id',  BlogController.deleteBlog);

export default blogRouter;
